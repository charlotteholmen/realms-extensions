var Ri = Object.defineProperty;
var is = (e) => {
  throw TypeError(e);
};
var Bi = (e, t, r) => t in e ? Ri(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var Oe = (e, t, r) => Bi(e, typeof t != "symbol" ? t + "" : t, r), ma = (e, t, r) => t.has(e) || is("Cannot " + r);
var o = (e, t, r) => (ma(e, t, "read from private field"), r ? r.call(e) : t.get(e)), L = (e, t, r) => t.has(e) ? is("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), A = (e, t, r, n) => (ma(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), V = (e, t, r) => (ma(e, t, "access private method"), r);
var qa = Array.isArray, Di = Array.prototype.indexOf, Ur = Array.prototype.includes, ta = Array.from, Pi = Object.defineProperty, _n = Object.getOwnPropertyDescriptor, Fi = Object.getOwnPropertyDescriptors, Oi = Object.prototype, zi = Array.prototype, ws = Object.getPrototypeOf, os = Object.isExtensible;
const Hi = () => {
};
function Vi(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function ks() {
  var e, t, r = new Promise((n, a) => {
    e = n, t = a;
  });
  return { promise: r, resolve: e, reject: t };
}
const ye = 2, Yr = 4, ra = 8, Es = 1 << 24, wt = 16, Mt = 32, ir = 64, Ta = 128, lt = 512, ue = 1024, be = 2048, Ft = 4096, Be = 8192, Ct = 16384, Sr = 32768, ls = 1 << 25, $r = 65536, Wn = 1 << 17, Ii = 1 << 18, Zr = 1 << 19, qi = 1 << 20, Gt = 1 << 25, Er = 65536, Kn = 1 << 21, Dr = 1 << 22, sr = 1 << 23, gn = Symbol("$state"), Vn = Symbol("attributes"), Aa = Symbol("class"), La = Symbol("style"), cn = Symbol("text"), In = Symbol("form reset"), na = new class extends Error {
  constructor() {
    super(...arguments);
    Oe(this, "name", "StaleReactionError");
    Oe(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ui() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Yi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function $i(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Gi() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Wi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Ki() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Ji() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Zi() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Qi() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Xi() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const eo = 1, to = 2, ro = 16, Cs = 1, no = 2, he = Symbol(), Ms = "http://www.w3.org/1999/xhtml";
function ao() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function so() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function io() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ss(e) {
  return e === this.v;
}
function oo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ts(e) {
  return !oo(e, this.v);
}
let ut = null;
function Gr(e) {
  ut = e;
}
function As(e, t = !1, r) {
  ut = {
    p: ut,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      H
    ),
    l: null
  };
}
function Ls(e) {
  var t = (
    /** @type {ComponentContext} */
    ut
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      Xs(n);
  }
  return t.i = !0, ut = t.p, /** @type {T} */
  {};
}
function js() {
  return !0;
}
let cr = [];
function Ns() {
  var e = cr;
  cr = [], Vi(e);
}
function Pr(e) {
  if (cr.length === 0 && !xn) {
    var t = cr;
    queueMicrotask(() => {
      t === cr && Ns();
    });
  }
  cr.push(e);
}
function lo() {
  for (; cr.length > 0; )
    Ns();
}
function Rs(e) {
  var t = H;
  if (t === null)
    return O.f |= sr, e;
  if ((t.f & Sr) === 0 && (t.f & Yr) === 0)
    throw e;
  ar(e, t);
}
function ar(e, t) {
  for (; t !== null; ) {
    if ((t.f & Ta) !== 0) {
      if ((t.f & Sr) === 0)
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
const uo = -7169;
function ie(e, t) {
  e.f = e.f & uo | t;
}
function Ua(e) {
  (e.f & lt) !== 0 || e.deps === null ? ie(e, ue) : ie(e, Ft);
}
function Bs(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ye) === 0 || (t.f & Er) === 0 || (t.f ^= Er, Bs(
        /** @type {Derived} */
        t.deps
      ));
}
function Ds(e, t, r) {
  (e.f & be) !== 0 ? t.add(e) : (e.f & Ft) !== 0 && r.add(e), Bs(e.deps), ie(e, ue);
}
let wa = null, jr = null, j = null, ja = null, kt = null, Na = null, xn = !1, ka = !1, Br = null, qn = null;
var ds = 0;
let fo = 1;
var Fr, tr, _r, Or, zr, gr, Hr, qt, wn, We, kn, rr, Bt, Dt, Vr, Ir, Y, Ra, hn, Ba, Ps, Fs, Un, vo, Da, Rr;
const Qn = class Qn {
  constructor() {
    L(this, Y);
    Oe(this, "id", fo++);
    /** True as soon as `#process` was called */
    L(this, Fr, !1);
    Oe(this, "linked", !0);
    /** @type {Batch | null} */
    L(this, tr, null);
    /** @type {Batch | null} */
    L(this, _r, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    Oe(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    Oe(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    Oe(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    Oe(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, Or, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, zr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    L(this, gr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    L(this, Hr, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    L(this, qt, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    L(this, wn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    L(this, We, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    L(this, kn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    L(this, rr, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    L(this, Bt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    L(this, Dt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    L(this, Vr, /* @__PURE__ */ new Set());
    Oe(this, "is_fork", !1);
    L(this, Ir, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, Dt).has(t) || o(this, Dt).set(t, { d: [], m: [] }), o(this, Vr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = o(this, Dt).get(t);
    if (n) {
      o(this, Dt).delete(t);
      for (var a of n.d)
        ie(a, be), r(a);
      for (a of n.m)
        ie(a, Ft), r(a);
    }
    o(this, Vr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== he && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & sr) === 0 && (this.current.set(t, [r, n]), kt?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    j = this;
  }
  deactivate() {
    j = null, kt = null;
  }
  flush() {
    try {
      ka = !0, j = this, V(this, Y, hn).call(this);
    } finally {
      ds = 0, Na = null, Br = null, qn = null, ka = !1, j = null, kt = null, mr.clear();
    }
  }
  discard() {
    for (const t of o(this, zr)) t(this);
    o(this, zr).clear(), o(this, gr).clear(), V(this, Y, Rr).call(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    o(this, kn).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    if (A(this, Hr, o(this, Hr) + 1), t) {
      let n = o(this, qt).get(r) ?? 0;
      o(this, qt).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (A(this, Hr, o(this, Hr) - 1), t) {
      let n = o(this, qt).get(r) ?? 0;
      n === 1 ? o(this, qt).delete(r) : o(this, qt).set(r, n - 1);
    }
    o(this, Ir) || (A(this, Ir, !0), Pr(() => {
      A(this, Ir, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, rr).add(n);
    for (const n of r)
      o(this, Bt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, Or).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, zr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    o(this, gr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of o(this, gr)) t(this);
    o(this, gr).clear();
  }
  settled() {
    return (o(this, wn) ?? A(this, wn, ks())).promise;
  }
  static ensure() {
    var t;
    if (j === null) {
      const r = j = new Qn();
      V(t = r, Y, Da).call(t), !ka && !xn && Pr(() => {
        o(r, Fr) || r.flush();
      });
    }
    return j;
  }
  apply() {
    {
      kt = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Na = t, t.b?.is_pending && (t.f & (Yr | ra | Es)) !== 0 && (t.f & Sr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Br !== null && r === H && (O === null || (O.f & ye) === 0))
        return;
      if ((n & (ir | Mt)) !== 0) {
        if ((n & ue) === 0)
          return;
        r.f ^= ue;
      }
    }
    o(this, We).push(r);
  }
};
Fr = new WeakMap(), tr = new WeakMap(), _r = new WeakMap(), Or = new WeakMap(), zr = new WeakMap(), gr = new WeakMap(), Hr = new WeakMap(), qt = new WeakMap(), wn = new WeakMap(), We = new WeakMap(), kn = new WeakMap(), rr = new WeakMap(), Bt = new WeakMap(), Dt = new WeakMap(), Vr = new WeakMap(), Ir = new WeakMap(), Y = new WeakSet(), Ra = function() {
  if (this.is_fork) return !0;
  for (const n of o(this, qt).keys()) {
    for (var t = n, r = !1; t.parent !== null; ) {
      if (o(this, Dt).has(t)) {
        r = !0;
        break;
      }
      t = t.parent;
    }
    if (!r)
      return !0;
  }
  return !1;
}, hn = function() {
  var f, u, x;
  if (A(this, Fr, !0), ds++ > 1e3 && (V(this, Y, Rr).call(this), ho()), !V(this, Y, Ra).call(this)) {
    for (const c of o(this, rr))
      o(this, Bt).delete(c), ie(c, be), this.schedule(c);
    for (const c of o(this, Bt))
      ie(c, Ft), this.schedule(c);
  }
  const t = o(this, We);
  A(this, We, []), this.apply();
  var r = Br = [], n = [], a = qn = [];
  for (const c of t)
    try {
      V(this, Y, Ba).call(this, c, r, n);
    } catch (g) {
      throw Hs(c), g;
    }
  if (j = null, a.length > 0) {
    var i = Qn.ensure();
    for (const c of a)
      i.schedule(c);
  }
  if (Br = null, qn = null, V(this, Y, Ra).call(this)) {
    V(this, Y, Un).call(this, n), V(this, Y, Un).call(this, r);
    for (const [c, g] of o(this, Dt))
      zs(c, g);
    a.length > 0 && /** @type {unknown} */
    V(f = j, Y, hn).call(f);
    return;
  }
  const d = V(this, Y, Ps).call(this);
  if (d) {
    V(u = d, Y, Fs).call(u, this);
    return;
  }
  o(this, rr).clear(), o(this, Bt).clear();
  for (const c of o(this, Or)) c(this);
  o(this, Or).clear(), ja = this, us(n), us(r), ja = null, o(this, wn)?.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    j
  );
  if (this.linked && o(this, Hr) === 0 && V(this, Y, Rr).call(this), o(this, We).length > 0) {
    l === null && (l = this, V(this, Y, Da).call(this));
    const c = l;
    o(c, We).push(...o(this, We).filter((g) => !o(c, We).includes(g)));
  }
  l !== null && V(x = l, Y, hn).call(x);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Ba = function(t, r, n) {
  t.f ^= ue;
  for (var a = t.first; a !== null; ) {
    var i = a.f, d = (i & (Mt | ir)) !== 0, l = d && (i & ue) !== 0, f = l || (i & Be) !== 0 || o(this, Dt).has(a);
    if (!f && a.fn !== null) {
      d ? a.f ^= ue : (i & Yr) !== 0 ? r.push(a) : An(a) && ((i & wt) !== 0 && o(this, Bt).add(a), Kr(a));
      var u = a.first;
      if (u !== null) {
        a = u;
        continue;
      }
    }
    for (; a !== null; ) {
      var x = a.next;
      if (x !== null) {
        a = x;
        break;
      }
      a = a.parent;
    }
  }
}, Ps = function() {
  for (var t = o(this, tr); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = o(t, tr);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
Fs = function(t) {
  var n;
  for (const [a, i] of t.current)
    !this.previous.has(a) && t.previous.has(a) && this.previous.set(a, t.previous.get(a)), this.current.set(a, i);
  for (const [a, i] of t.async_deriveds) {
    const d = this.async_deriveds.get(a);
    d && i.promise.then(d.resolve);
  }
  const r = (a) => {
    var i = a.reactions;
    if (i !== null)
      for (const f of i) {
        var d = f.f;
        if ((d & ye) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var l = (
            /** @type {Effect} */
            f
          );
          d & (Dr | wt) && !this.async_deriveds.has(l) && (o(this, Bt).delete(l), ie(l, be), this.schedule(l));
        }
      }
  };
  for (const a of this.current.keys())
    r(a);
  this.oncommit(() => t.discard()), V(n = t, Y, Rr).call(n), j = this, V(this, Y, hn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Un = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ds(t[r], o(this, rr), o(this, Bt));
}, vo = function() {
  var x;
  V(this, Y, Rr).call(this);
  for (let c = wa; c !== null; c = o(c, _r)) {
    var t = c.id < this.id, r = [];
    for (const [g, [w, _]] of this.current) {
      if (c.current.has(g)) {
        var n = (
          /** @type {[any, boolean]} */
          c.current.get(g)[0]
        );
        if (t && w !== n)
          c.current.set(g, [w, _]);
        else
          continue;
      }
      r.push(g);
    }
    if (t)
      for (const [g, w] of this.async_deriveds) {
        const _ = c.async_deriveds.get(g);
        _ && w.promise.then(_.resolve);
      }
    if (o(c, Fr)) {
      var a = [...c.current.keys()].filter((g) => !this.current.has(g));
      if (a.length === 0)
        t && c.discard();
      else if (r.length > 0) {
        if (t)
          for (const g of o(this, Vr))
            c.unskip_effect(g, (w) => {
              var _;
              (w.f & (wt | Dr)) !== 0 ? c.schedule(w) : V(_ = c, Y, Un).call(_, [w]);
            });
        c.activate();
        var i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (var l of r)
          Os(l, a, i, d);
        d = /* @__PURE__ */ new Map();
        var f = [...c.current.keys()].filter(
          (g) => this.current.has(g) ? (
            /** @type {[any, boolean]} */
            this.current.get(g)[0] !== g.v
          ) : !0
        );
        if (f.length > 0)
          for (const g of o(this, kn))
            (g.f & (Ct | Be | Wn)) === 0 && Ya(g, f, d) && ((g.f & (Dr | wt)) !== 0 ? (ie(g, be), c.schedule(g)) : o(c, rr).add(g));
        if (o(c, We).length > 0) {
          c.apply();
          for (var u of o(c, We))
            V(x = c, Y, Ba).call(x, u, [], []);
          A(c, We, []);
        }
        c.deactivate();
      }
    }
  }
}, Da = function() {
  jr === null ? wa = jr = this : (A(jr, _r, this), A(this, tr, jr)), jr = this;
}, Rr = function() {
  var t = o(this, tr), r = o(this, _r);
  t === null ? wa = r : A(t, _r, r), r === null ? jr = t : A(r, tr, t), this.linked = !1;
};
let Cr = Qn;
function co(e) {
  var t = xn;
  xn = !0;
  try {
    for (var r; ; ) {
      if (lo(), j === null)
        return (
          /** @type {T} */
          r
        );
      j.flush();
    }
  } finally {
    xn = t;
  }
}
function ho() {
  try {
    Ki();
  } catch (e) {
    ar(e, Na);
  }
}
let It = null;
function us(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ct | Be)) === 0 && An(n) && (It = /* @__PURE__ */ new Set(), Kr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ni(n), It?.size > 0)) {
        mr.clear();
        for (const a of It) {
          if ((a.f & (Ct | Be)) !== 0) continue;
          const i = [a];
          let d = a.parent;
          for (; d !== null; )
            It.has(d) && (It.delete(d), i.push(d)), d = d.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const f = i[l];
            (f.f & (Ct | Be)) === 0 && Kr(f);
          }
        }
        It.clear();
      }
    }
    It = null;
  }
}
function Os(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const a of e.reactions) {
      const i = a.f;
      (i & ye) !== 0 ? Os(
        /** @type {Derived} */
        a,
        t,
        r,
        n
      ) : (i & (Dr | wt)) !== 0 && (i & be) === 0 && Ya(a, t, n) && (ie(a, be), $a(
        /** @type {Effect} */
        a
      ));
    }
}
function Ya(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const a of e.deps) {
      if (Ur.call(t, a))
        return !0;
      if ((a.f & ye) !== 0 && Ya(
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
function $a(e) {
  j.schedule(e);
}
function zs(e, t) {
  if (!((e.f & Mt) !== 0 && (e.f & ue) !== 0)) {
    (e.f & be) !== 0 ? t.d.push(e) : (e.f & Ft) !== 0 && t.m.push(e), ie(e, ue);
    for (var r = e.first; r !== null; )
      zs(r, t), r = r.next;
  }
}
function Hs(e) {
  ie(e, ue);
  for (var t = e.first; t !== null; )
    Hs(t), t = t.next;
}
function po(e) {
  let t = 0, r = Mr(0), n;
  return () => {
    Ja() && (s(r), ti(() => (t === 0 && (n = ci(() => e(() => bn(r)))), t += 1, () => {
      Pr(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, bn(r));
      });
    })));
  };
}
var _o = $r | Zr;
function go(e, t, r, n) {
  new xo(e, t, r, n);
}
var at, Ia, st, xr, ze, it, Re, Ke, Ut, br, nr, qr, En, Cn, Yt, Xn, oe, bo, yo, mo, Pa, Yn, $n, Fa, Oa;
class xo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, a) {
    L(this, oe);
    /** @type {Boundary | null} */
    Oe(this, "parent");
    Oe(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    Oe(this, "transform_error");
    /** @type {TemplateNode} */
    L(this, at);
    /** @type {TemplateNode | null} */
    L(this, Ia, null);
    /** @type {BoundaryProps} */
    L(this, st);
    /** @type {((anchor: Node) => void)} */
    L(this, xr);
    /** @type {Effect} */
    L(this, ze);
    /** @type {Effect | null} */
    L(this, it, null);
    /** @type {Effect | null} */
    L(this, Re, null);
    /** @type {Effect | null} */
    L(this, Ke, null);
    /** @type {DocumentFragment | null} */
    L(this, Ut, null);
    L(this, br, 0);
    L(this, nr, 0);
    L(this, qr, !1);
    /** @type {Set<Effect>} */
    L(this, En, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    L(this, Cn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    L(this, Yt, null);
    L(this, Xn, po(() => (A(this, Yt, Mr(o(this, br))), () => {
      A(this, Yt, null);
    })));
    A(this, at, t), A(this, st, r), A(this, xr, (i) => {
      var d = (
        /** @type {Effect} */
        H
      );
      d.b = this, d.f |= Ta, n(i);
    }), this.parent = /** @type {Effect} */
    H.b, this.transform_error = a ?? this.parent?.transform_error ?? ((i) => i), A(this, ze, Za(() => {
      V(this, oe, Pa).call(this);
    }, _o));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ds(t, o(this, En), o(this, Cn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, st).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    V(this, oe, Fa).call(this, t, r), A(this, br, o(this, br) + t), !(!o(this, Yt) || o(this, qr)) && (A(this, qr, !0), Pr(() => {
      A(this, qr, !1), o(this, Yt) && Wr(o(this, Yt), o(this, br));
    }));
  }
  get_effect_pending() {
    return o(this, Xn).call(this), s(
      /** @type {Source<number>} */
      o(this, Yt)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, st).onerror && !o(this, st).failed)
      throw t;
    j?.is_fork ? (o(this, it) && j.skip_effect(o(this, it)), o(this, Re) && j.skip_effect(o(this, Re)), o(this, Ke) && j.skip_effect(o(this, Ke)), j.on_fork_commit(() => {
      V(this, oe, Oa).call(this, t);
    })) : V(this, oe, Oa).call(this, t);
  }
}
at = new WeakMap(), Ia = new WeakMap(), st = new WeakMap(), xr = new WeakMap(), ze = new WeakMap(), it = new WeakMap(), Re = new WeakMap(), Ke = new WeakMap(), Ut = new WeakMap(), br = new WeakMap(), nr = new WeakMap(), qr = new WeakMap(), En = new WeakMap(), Cn = new WeakMap(), Yt = new WeakMap(), Xn = new WeakMap(), oe = new WeakSet(), bo = function() {
  try {
    A(this, it, ot(() => o(this, xr).call(this, o(this, at))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
yo = function(t) {
  const r = o(this, st).failed;
  r && A(this, Ke, ot(() => {
    r(
      o(this, at),
      () => t,
      () => () => {
      }
    );
  }));
}, mo = function() {
  const t = o(this, st).pending;
  t && (this.is_pending = !0, A(this, Re, ot(() => t(o(this, at)))), Pr(() => {
    var r = A(this, Ut, document.createDocumentFragment()), n = Wt();
    r.append(n), A(this, it, V(this, oe, $n).call(this, () => ot(() => o(this, xr).call(this, n)))), o(this, nr) === 0 && (o(this, at).before(r), A(this, Ut, null), wr(
      /** @type {Effect} */
      o(this, Re),
      () => {
        A(this, Re, null);
      }
    ), V(this, oe, Yn).call(
      this,
      /** @type {Batch} */
      j
    ));
  }));
}, Pa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), A(this, nr, 0), A(this, br, 0), A(this, it, ot(() => {
      o(this, xr).call(this, o(this, at));
    })), o(this, nr) > 0) {
      var t = A(this, Ut, document.createDocumentFragment());
      es(o(this, it), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, st).pending
      );
      A(this, Re, ot(() => r(o(this, at))));
    } else
      V(this, oe, Yn).call(
        this,
        /** @type {Batch} */
        j
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
Yn = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, En), o(this, Cn));
}, /**
 * @template T
 * @param {() => T} fn
 */
$n = function(t) {
  var r = H, n = O, a = ut;
  Ot(o(this, ze)), ft(o(this, ze)), Gr(o(this, ze).ctx);
  try {
    return Cr.ensure(), t();
  } catch (i) {
    return Rs(i), null;
  } finally {
    Ot(r), ft(n), Gr(a);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Fa = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && V(n = this.parent, oe, Fa).call(n, t, r);
    return;
  }
  A(this, nr, o(this, nr) + t), o(this, nr) === 0 && (V(this, oe, Yn).call(this, r), o(this, Re) && wr(o(this, Re), () => {
    A(this, Re, null);
  }), o(this, Ut) && (o(this, at).before(o(this, Ut)), A(this, Ut, null)));
}, /**
 * @param {unknown} error
 */
Oa = function(t) {
  o(this, it) && (Ve(o(this, it)), A(this, it, null)), o(this, Re) && (Ve(o(this, Re)), A(this, Re, null)), o(this, Ke) && (Ve(o(this, Ke)), A(this, Ke, null));
  var r = o(this, st).onerror;
  let n = o(this, st).failed;
  var a = !1, i = !1;
  const d = () => {
    if (a) {
      io();
      return;
    }
    a = !0, i && Xi(), o(this, Ke) !== null && wr(o(this, Ke), () => {
      A(this, Ke, null);
    }), V(this, oe, $n).call(this, () => {
      V(this, oe, Pa).call(this);
    });
  }, l = (f) => {
    try {
      i = !0, r?.(f, d), i = !1;
    } catch (u) {
      ar(u, o(this, ze) && o(this, ze).parent);
    }
    n && A(this, Ke, V(this, oe, $n).call(this, () => {
      try {
        return ot(() => {
          var u = (
            /** @type {Effect} */
            H
          );
          u.b = this, u.f |= Ta, n(
            o(this, at),
            () => f,
            () => d
          );
        });
      } catch (u) {
        return ar(
          u,
          /** @type {Effect} */
          o(this, ze).parent
        ), null;
      }
    }));
  };
  Pr(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      ar(u, o(this, ze) && o(this, ze).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      l,
      /** @param {unknown} e */
      (u) => ar(u, o(this, ze) && o(this, ze).parent)
    ) : l(f);
  });
};
function wo(e, t, r, n) {
  const a = Ga;
  var i = e.filter((g) => !g.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(a));
    return;
  }
  var d = (
    /** @type {Effect} */
    H
  ), l = ko(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((g) => g.promise)) : null;
  function u(g) {
    if ((d.f & Ct) === 0) {
      l();
      try {
        n(g);
      } catch (w) {
        ar(w, d);
      }
      Jn();
    }
  }
  var x = Vs();
  if (r.length === 0) {
    f.then(() => u(t.map(a))).finally(x);
    return;
  }
  function c() {
    Promise.all(r.map((g) => /* @__PURE__ */ Eo(g))).then((g) => u([...t.map(a), ...g])).catch((g) => ar(g, d)).finally(x);
  }
  f ? f.then(() => {
    l(), c(), Jn();
  }) : c();
}
function ko() {
  var e = (
    /** @type {Effect} */
    H
  ), t = O, r = ut, n = (
    /** @type {Batch} */
    j
  );
  return function(i = !0) {
    Ot(e), ft(t), Gr(r), i && (e.f & Ct) === 0 && (n?.activate(), n?.apply());
  };
}
function Jn(e = !0) {
  Ot(null), ft(null), Gr(null), e && j?.deactivate();
}
function Vs() {
  var e = (
    /** @type {Effect} */
    H
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    j
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Ga(e) {
  var t = ye | be;
  return H !== null && (H.f |= Zr), {
    ctx: ut,
    deps: null,
    effects: null,
    equals: Ss,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      he
    ),
    wv: 0,
    parent: H,
    ac: null
  };
}
const zn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function Eo(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    H
  );
  n === null && Ui();
  var a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Mr(
    /** @type {V} */
    he
  ), d = !O, l = /* @__PURE__ */ new Set();
  return zo(() => {
    var f = (
      /** @type {Effect} */
      H
    ), u = ks();
    a = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (w) => {
        w !== na && u.reject(w);
      }).finally(Jn);
    } catch (w) {
      u.reject(w), Jn();
    }
    var x = (
      /** @type {Batch} */
      j
    );
    if (d) {
      if ((f.f & Sr) !== 0)
        var c = Vs();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        x.async_deriveds.get(f)?.reject(zn);
      else
        for (const w of l.values())
          w.reject(zn);
      l.add(u), x.async_deriveds.set(f, u);
    }
    const g = (w, _ = void 0) => {
      c?.(), l.delete(u), _ !== zn && (x.activate(), _ ? (i.f |= sr, Wr(i, _)) : ((i.f & sr) !== 0 && (i.f ^= sr), Wr(i, w)), x.deactivate());
    };
    u.promise.then(g, (w) => g(null, w || "unknown"));
  }), Qs(() => {
    for (const f of l)
      f.reject(zn);
  }), new Promise((f) => {
    function u(x) {
      function c() {
        x === a ? f(i) : u(a);
      }
      x.then(c, c);
    }
    u(a);
  });
}
// @__NO_SIDE_EFFECTS__
function rt(e) {
  const t = /* @__PURE__ */ Ga(e);
  return ii(t), t;
}
// @__NO_SIDE_EFFECTS__
function Co(e) {
  const t = /* @__PURE__ */ Ga(e);
  return t.equals = Ts, t;
}
function Mo(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ve(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Wa(e) {
  var t, r = H, n = e.parent;
  if (!or && n !== null && (n.f & (Ct | Be)) !== 0)
    return ao(), e.v;
  Ot(n);
  try {
    e.f &= ~Er, Mo(e), t = ui(e);
  } finally {
    Ot(r);
  }
  return t;
}
function Is(e) {
  var t = Wa(e);
  if (!e.equals(t) && (e.wv = li(), (!j?.is_fork || e.deps === null) && (j !== null ? (j.capture(e, t, !0), ja?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    ie(e, ue);
    return;
  }
  or || (kt !== null ? (Ja() || j?.is_fork) && kt.set(e, t) : Ua(e));
}
function So(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(na), t.teardown = Hi, t.ac = null, mn(t, 0), Qa(t));
}
function qs(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Kr(t);
}
let Zn = /* @__PURE__ */ new Set();
const mr = /* @__PURE__ */ new Map();
let Us = !1;
function Mr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ss,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function W(e, t) {
  const r = Mr(e);
  return ii(r), r;
}
// @__NO_SIDE_EFFECTS__
function To(e, t = !1, r = !0) {
  const n = Mr(e);
  return t || (n.equals = Ts), n;
}
function S(e, t, r = !1) {
  O !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Et || (O.f & Wn) !== 0) && js() && (O.f & (ye | wt | Dr | Wn)) !== 0 && (dt === null || !Ur.call(dt, e)) && Qi();
  let n = r ? Ze(t) : t;
  return Wr(e, n, qn);
}
function Wr(e, t, r = null) {
  if (!e.equals(t)) {
    mr.set(e, or ? t : e.v);
    var n = Cr.ensure();
    if (n.capture(e, t), (e.f & ye) !== 0) {
      const a = (
        /** @type {Derived} */
        e
      );
      (e.f & be) !== 0 && Wa(a), kt === null && Ua(a);
    }
    e.wv = li(), Ys(e, be, r), H !== null && (H.f & ue) !== 0 && (H.f & (Mt | ir)) === 0 && (nt === null ? Io([e]) : nt.push(e)), !n.is_fork && Zn.size > 0 && !Us && Ao();
  }
  return t;
}
function Ao() {
  Us = !1;
  for (const e of Zn) {
    (e.f & ue) !== 0 && ie(e, Ft);
    let t;
    try {
      t = An(e);
    } catch {
      t = !0;
    }
    t && Kr(e);
  }
  Zn.clear();
}
function Lo(e, t = 1) {
  var r = s(e);
  return S(e, t === 1 ? ++r : --r);
}
function bn(e) {
  S(e, e.v + 1);
}
function Ys(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var a = n.length, i = 0; i < a; i++) {
      var d = n[i], l = d.f, f = (l & be) === 0;
      if (f && ie(d, t), (l & Wn) !== 0)
        Zn.add(
          /** @type {Effect} */
          d
        );
      else if ((l & ye) !== 0) {
        var u = (
          /** @type {Derived} */
          d
        );
        kt?.delete(u), (l & Er) === 0 && (l & lt && (H === null || (H.f & Kn) === 0) && (d.f |= Er), Ys(u, Ft, r));
      } else if (f) {
        var x = (
          /** @type {Effect} */
          d
        );
        (l & wt) !== 0 && It !== null && It.add(x), r !== null ? r.push(x) : $a(x);
      }
    }
}
function Ze(e) {
  if (typeof e != "object" || e === null || gn in e)
    return e;
  const t = ws(e);
  if (t !== Oi && t !== zi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = qa(e), a = /* @__PURE__ */ W(0), i = kr, d = (l) => {
    if (kr === i)
      return l();
    var f = O, u = kr;
    ft(null), ps(i);
    var x = l();
    return ft(f), ps(u), x;
  };
  return n && r.set("length", /* @__PURE__ */ W(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Ji();
        var x = r.get(f);
        return x === void 0 ? d(() => {
          var c = /* @__PURE__ */ W(u.value);
          return r.set(f, c), c;
        }) : S(x, u.value, !0), !0;
      },
      deleteProperty(l, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in l) {
            const x = d(() => /* @__PURE__ */ W(he));
            r.set(f, x), bn(a);
          }
        } else
          S(u, he), bn(a);
        return !0;
      },
      get(l, f, u) {
        if (f === gn)
          return e;
        var x = r.get(f), c = f in l;
        if (x === void 0 && (!c || _n(l, f)?.writable) && (x = d(() => {
          var w = Ze(c ? l[f] : he), _ = /* @__PURE__ */ W(w);
          return _;
        }), r.set(f, x)), x !== void 0) {
          var g = s(x);
          return g === he ? void 0 : g;
        }
        return Reflect.get(l, f, u);
      },
      getOwnPropertyDescriptor(l, f) {
        var u = Reflect.getOwnPropertyDescriptor(l, f);
        if (u && "value" in u) {
          var x = r.get(f);
          x && (u.value = s(x));
        } else if (u === void 0) {
          var c = r.get(f), g = c?.v;
          if (c !== void 0 && g !== he)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return u;
      },
      has(l, f) {
        if (f === gn)
          return !0;
        var u = r.get(f), x = u !== void 0 && u.v !== he || Reflect.has(l, f);
        if (u !== void 0 || H !== null && (!x || _n(l, f)?.writable)) {
          u === void 0 && (u = d(() => {
            var g = x ? Ze(l[f]) : he, w = /* @__PURE__ */ W(g);
            return w;
          }), r.set(f, u));
          var c = s(u);
          if (c === he)
            return !1;
        }
        return x;
      },
      set(l, f, u, x) {
        var c = r.get(f), g = f in l;
        if (n && f === "length")
          for (var w = u; w < /** @type {Source<number>} */
          c.v; w += 1) {
            var _ = r.get(w + "");
            _ !== void 0 ? S(_, he) : w in l && (_ = d(() => /* @__PURE__ */ W(he)), r.set(w + "", _));
          }
        if (c === void 0)
          (!g || _n(l, f)?.writable) && (c = d(() => /* @__PURE__ */ W(void 0)), S(c, Ze(u)), r.set(f, c));
        else {
          g = c.v !== he;
          var $ = d(() => Ze(u));
          S(c, $);
        }
        var P = Reflect.getOwnPropertyDescriptor(l, f);
        if (P?.set && P.set.call(x, u), !g) {
          if (n && typeof f == "string") {
            var F = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(f);
            Number.isInteger(m) && m >= F.v && S(F, m + 1);
          }
          bn(a);
        }
        return !0;
      },
      ownKeys(l) {
        s(a);
        var f = Reflect.ownKeys(l).filter((c) => {
          var g = r.get(c);
          return g === void 0 || g.v !== he;
        });
        for (var [u, x] of r)
          x.v !== he && !(u in l) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        Zi();
      }
    }
  );
}
function fs(e) {
  try {
    if (e !== null && typeof e == "object" && gn in e)
      return e[gn];
  } catch {
  }
  return e;
}
function jo(e, t) {
  return Object.is(fs(e), fs(t));
}
var vs, $s, Gs, Ws;
function No() {
  if (vs === void 0) {
    vs = window, $s = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Gs = _n(t, "firstChild").get, Ws = _n(t, "nextSibling").get, os(e) && (e[Aa] = void 0, e[Vn] = null, e[La] = void 0, e.__e = void 0), os(r) && (r[cn] = void 0);
  }
}
function Wt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return (
    /** @type {TemplateNode | null} */
    Gs.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return (
    /** @type {TemplateNode | null} */
    Ws.call(e)
  );
}
function v(e, t) {
  return /* @__PURE__ */ $t(e);
}
function Rt(e, t = !1) {
  {
    var r = /* @__PURE__ */ $t(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Tn(r) : r;
  }
}
function p(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Tn(n);
  return n;
}
function Ro(e) {
  e.textContent = "";
}
function Ks() {
  return !1;
}
function Js(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ms, e, void 0)
  );
}
let cs = !1;
function Bo() {
  cs || (cs = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t[In]?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Ka(e) {
  var t = O, r = H;
  ft(null), Ot(null);
  try {
    return e();
  } finally {
    ft(t), Ot(r);
  }
}
function Zs(e, t, r, n = r) {
  e.addEventListener(t, () => Ka(r));
  const a = (
    /** @type {any} */
    e[In]
  );
  a ? e[In] = () => {
    a(), n(!0);
  } : e[In] = () => n(!0), Bo();
}
function Do(e) {
  H === null && (O === null && Wi(), Gi()), or && $i();
}
function Po(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Kt(e, t) {
  var r = H;
  r !== null && (r.f & Be) !== 0 && (e |= Be);
  var n = {
    ctx: ut,
    deps: null,
    nodes: null,
    f: e | be | lt,
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
  j?.register_created_effect(n);
  var a = n;
  if ((e & Yr) !== 0)
    Br !== null ? Br.push(n) : Cr.ensure().schedule(n);
  else if (t !== null) {
    try {
      Kr(n);
    } catch (d) {
      throw Ve(n), d;
    }
    a.deps === null && a.teardown === null && a.nodes === null && a.first === a.last && // either `null`, or a singular child
    (a.f & Zr) === 0 && (a = a.first, (e & wt) !== 0 && (e & $r) !== 0 && a !== null && (a.f |= $r));
  }
  if (a !== null && (a.parent = r, r !== null && Po(a, r), O !== null && (O.f & ye) !== 0 && (e & ir) === 0)) {
    var i = (
      /** @type {Derived} */
      O
    );
    (i.effects ?? (i.effects = [])).push(a);
  }
  return n;
}
function Ja() {
  return O !== null && !Et;
}
function Qs(e) {
  const t = Kt(ra, null);
  return ie(t, ue), t.teardown = e, t;
}
function Fo(e) {
  Do();
  var t = (
    /** @type {Effect} */
    H.f
  ), r = !O && (t & Mt) !== 0 && (t & Sr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ut
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return Xs(e);
}
function Xs(e) {
  return Kt(Yr | qi, e);
}
function Oo(e) {
  Cr.ensure();
  const t = Kt(ir | Zr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? wr(t, () => {
      Ve(t), n(void 0);
    }) : (Ve(t), n(void 0));
  });
}
function ei(e) {
  return Kt(Yr, e);
}
function zo(e) {
  return Kt(Dr | Zr, e);
}
function ti(e, t = 0) {
  return Kt(ra | t, e);
}
function D(e, t = [], r = [], n = []) {
  wo(n, t, r, (a) => {
    Kt(ra, () => e(...a.map(s)));
  });
}
function Za(e, t = 0) {
  var r = Kt(wt | t, e);
  return r;
}
function ot(e) {
  return Kt(Mt | Zr, e);
}
function ri(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = or, n = O;
    hs(!0), ft(null);
    try {
      t.call(null);
    } finally {
      hs(r), ft(n);
    }
  }
}
function Qa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const a = r.ac;
    a !== null && Ka(() => {
      a.abort(na);
    });
    var n = r.next;
    (r.f & ir) !== 0 ? r.parent = null : Ve(r, t), r = n;
  }
}
function Ho(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Mt) === 0 && Ve(t), t = r;
  }
}
function Ve(e, t = !0) {
  var r = !1;
  (t || (e.f & Ii) !== 0) && e.nodes !== null && e.nodes.end !== null && (Vo(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ie(e, ls), Qa(e, t && !r), mn(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ri(e), e.f ^= ls, e.f |= Ct;
  var a = e.parent;
  a !== null && a.first !== null && ni(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Vo(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Tn(e);
    e.remove(), e = r;
  }
}
function ni(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function wr(e, t, r = !0) {
  var n = [];
  ai(e, n, !0);
  var a = () => {
    r && Ve(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var d = () => --i || a();
    for (var l of n)
      l.out(d);
  } else
    a();
}
function ai(e, t, r) {
  if ((e.f & Be) === 0) {
    e.f ^= Be;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var a = e.first; a !== null; ) {
      var i = a.next;
      if ((a.f & ir) === 0) {
        var d = (a.f & $r) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (a.f & Mt) !== 0 && (e.f & wt) !== 0;
        ai(a, t, d ? r : !1);
      }
      a = i;
    }
  }
}
function Xa(e) {
  si(e, !0);
}
function si(e, t) {
  if ((e.f & Be) !== 0) {
    e.f ^= Be, (e.f & ue) === 0 && (ie(e, be), Cr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, a = (r.f & $r) !== 0 || (r.f & Mt) !== 0;
      si(r, a ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const d of i)
        (d.is_global || t) && d.in();
  }
}
function es(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var a = r === n ? null : /* @__PURE__ */ Tn(r);
      t.append(r), r = a;
    }
}
let Gn = !1, or = !1;
function hs(e) {
  or = e;
}
let O = null, Et = !1;
function ft(e) {
  O = e;
}
let H = null;
function Ot(e) {
  H = e;
}
let dt = null;
function ii(e) {
  O !== null && (dt === null ? dt = [e] : dt.push(e));
}
let He = null, Ge = 0, nt = null;
function Io(e) {
  nt = e;
}
let oi = 1, hr = 0, kr = hr;
function ps(e) {
  kr = e;
}
function li() {
  return ++oi;
}
function An(e) {
  var t = e.f;
  if ((t & be) !== 0)
    return !0;
  if (t & ye && (e.f &= ~Er), (t & Ft) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, a = 0; a < n; a++) {
      var i = r[a];
      if (An(
        /** @type {Derived} */
        i
      ) && Is(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & lt) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    kt === null && ie(e, ue);
  }
  return !1;
}
function di(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(dt !== null && Ur.call(dt, e)))
    for (var a = 0; a < n.length; a++) {
      var i = n[a];
      (i.f & ye) !== 0 ? di(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? ie(i, be) : (i.f & ue) !== 0 && ie(i, Ft), $a(
        /** @type {Effect} */
        i
      ));
    }
}
function ui(e) {
  var $;
  var t = He, r = Ge, n = nt, a = O, i = dt, d = ut, l = Et, f = kr, u = e.f;
  He = /** @type {null | Value[]} */
  null, Ge = 0, nt = null, O = (u & (Mt | ir)) === 0 ? e : null, dt = null, Gr(e.ctx), Et = !1, kr = ++hr, e.ac !== null && (Ka(() => {
    e.ac.abort(na);
  }), e.ac = null);
  try {
    e.f |= Kn;
    var x = (
      /** @type {Function} */
      e.fn
    ), c = x();
    e.f |= Sr;
    var g = e.deps, w = j?.is_fork;
    if (He !== null) {
      var _;
      if (w || mn(e, Ge), g !== null && Ge > 0)
        for (g.length = Ge + He.length, _ = 0; _ < He.length; _++)
          g[Ge + _] = He[_];
      else
        e.deps = g = He;
      if (Ja() && (e.f & lt) !== 0)
        for (_ = Ge; _ < g.length; _++)
          (($ = g[_]).reactions ?? ($.reactions = [])).push(e);
    } else !w && g !== null && Ge < g.length && (mn(e, Ge), g.length = Ge);
    if (js() && nt !== null && !Et && g !== null && (e.f & (ye | Ft | be)) === 0)
      for (_ = 0; _ < /** @type {Source[]} */
      nt.length; _++)
        di(
          nt[_],
          /** @type {Effect} */
          e
        );
    if (a !== null && a !== e) {
      if (hr++, a.deps !== null)
        for (let P = 0; P < r; P += 1)
          a.deps[P].rv = hr;
      if (t !== null)
        for (const P of t)
          P.rv = hr;
      nt !== null && (n === null ? n = nt : n.push(.../** @type {Source[]} */
      nt));
    }
    return (e.f & sr) !== 0 && (e.f ^= sr), c;
  } catch (P) {
    return Rs(P);
  } finally {
    e.f ^= Kn, He = t, Ge = r, nt = n, O = a, dt = i, Gr(d), Et = l, kr = f;
  }
}
function qo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Di.call(r, e);
    if (n !== -1) {
      var a = r.length - 1;
      a === 0 ? r = t.reactions = null : (r[n] = r[a], r.pop());
    }
  }
  if (r === null && (t.f & ye) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (He === null || !Ur.call(He, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & lt) !== 0 && (i.f ^= lt, i.f &= ~Er), i.v !== he && Ua(i), So(i), mn(i, 0);
  }
}
function mn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      qo(e, r[n]);
}
function Kr(e) {
  var t = e.f;
  if ((t & Ct) === 0) {
    ie(e, ue);
    var r = H, n = Gn;
    H = e, Gn = !0;
    try {
      (t & (wt | Es)) !== 0 ? Ho(e) : Qa(e), ri(e);
      var a = ui(e);
      e.teardown = typeof a == "function" ? a : null, e.wv = oi;
      var i;
    } finally {
      Gn = n, H = r;
    }
  }
}
async function Uo() {
  await Promise.resolve(), co();
}
function s(e) {
  var t = e.f, r = (t & ye) !== 0;
  if (O !== null && !Et) {
    var n = H !== null && (H.f & Ct) !== 0;
    if (!n && (dt === null || !Ur.call(dt, e))) {
      var a = O.deps;
      if ((O.f & Kn) !== 0)
        e.rv < hr && (e.rv = hr, He === null && a !== null && a[Ge] === e ? Ge++ : He === null ? He = [e] : He.push(e));
      else {
        (O.deps ?? (O.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [O] : Ur.call(i, O) || i.push(O);
      }
    }
  }
  if (or && mr.has(e))
    return mr.get(e);
  if (r) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (or) {
      var l = d.v;
      return ((d.f & ue) === 0 && d.reactions !== null || vi(d)) && (l = Wa(d)), mr.set(d, l), l;
    }
    var f = (d.f & lt) === 0 && !Et && O !== null && (Gn || (O.f & lt) !== 0), u = (d.f & Sr) === 0;
    An(d) && (f && (d.f |= lt), Is(d)), f && !u && (qs(d), fi(d));
  }
  if (kt?.has(e))
    return kt.get(e);
  if ((e.f & sr) !== 0)
    throw e.v;
  return e.v;
}
function fi(e) {
  if (e.f |= lt, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ye) !== 0 && (t.f & lt) === 0 && (qs(
        /** @type {Derived} */
        t
      ), fi(
        /** @type {Derived} */
        t
      ));
}
function vi(e) {
  if (e.v === he) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (mr.has(t) || (t.f & ye) !== 0 && vi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function ci(e) {
  var t = Et;
  try {
    return Et = !0, e();
  } finally {
    Et = t;
  }
}
const Yo = ["touchstart", "touchmove"];
function $o(e) {
  return Yo.includes(e);
}
const pr = Symbol("events"), hi = /* @__PURE__ */ new Set(), za = /* @__PURE__ */ new Set();
function Z(e, t, r) {
  (t[pr] ?? (t[pr] = {}))[e] = r;
}
function Go(e) {
  for (var t = 0; t < e.length; t++)
    hi.add(e[t]);
  for (var r of za)
    r(e);
}
let _s = null;
function gs(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, a = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    a[0] || e.target
  );
  _s = e;
  var d = 0, l = _s === e && e[pr];
  if (l) {
    var f = a.indexOf(l);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[pr] = t;
      return;
    }
    var u = a.indexOf(t);
    if (u === -1)
      return;
    f <= u && (d = f);
  }
  if (i = /** @type {Element} */
  a[d] || e.target, i !== t) {
    Pi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var x = O, c = H;
    ft(null), Ot(null);
    try {
      for (var g, w = []; i !== null; ) {
        var _ = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var $ = i[pr]?.[n];
          $ != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && $.call(i, e);
        } catch (P) {
          g ? w.push(P) : g = P;
        }
        if (e.cancelBubble || _ === t || _ === null)
          break;
        i = _;
      }
      if (g) {
        for (let P of w)
          queueMicrotask(() => {
            throw P;
          });
        throw g;
      }
    } finally {
      e[pr] = t, delete e.currentTarget, ft(x), Ot(c);
    }
  }
}
const Wo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Ko(e) {
  return (
    /** @type {string} */
    Wo?.createHTML(e) ?? e
  );
}
function pi(e) {
  var t = Js("template");
  return t.innerHTML = Ko(e.replaceAll("<!>", "<!---->")), t.content;
}
function Jr(e, t) {
  var r = (
    /** @type {Effect} */
    H
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function y(e, t) {
  var r = (t & Cs) !== 0, n = (t & no) !== 0, a, i = !e.startsWith("<!>");
  return () => {
    a === void 0 && (a = pi(i ? e : "<!>" + e), r || (a = /** @type {TemplateNode} */
    /* @__PURE__ */ $t(a)));
    var d = (
      /** @type {TemplateNode} */
      n || $s ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(d)
      ), f = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Jr(l, f);
    } else
      Jr(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function Jo(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), a = (t & Cs) !== 0, i = `<${r}>${n ? e : "<!>" + e}</${r}>`, d;
  return () => {
    if (!d) {
      var l = (
        /** @type {DocumentFragment} */
        pi(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ $t(l)
      );
      if (a)
        for (d = document.createDocumentFragment(); /* @__PURE__ */ $t(f); )
          d.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ $t(f)
          );
      else
        d = /** @type {Element} */
        /* @__PURE__ */ $t(f);
    }
    var u = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    if (a) {
      var x = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ $t(u)
      ), c = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Jr(x, c);
    } else
      Jr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Ie(e, t) {
  return /* @__PURE__ */ Jo(e, t, "svg");
}
function Zo(e = "") {
  {
    var t = Wt(e + "");
    return Jr(t, t), t;
  }
}
function Qo() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Wt();
  return e.append(t, r), Jr(t, r), e;
}
function b(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function M(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== /** @type {any} */
  (e[cn] ?? (e[cn] = e.nodeValue)) && (e[cn] = r, e.nodeValue = `${r}`);
}
function Xo(e, t) {
  return el(e, t);
}
const Hn = /* @__PURE__ */ new Map();
function el(e, { target: t, anchor: r, props: n = {}, events: a, context: i, intro: d = !0, transformError: l }) {
  No();
  var f = void 0, u = Oo(() => {
    var x = r ?? t.appendChild(Wt());
    go(
      /** @type {TemplateNode} */
      x,
      {
        pending: () => {
        }
      },
      (w) => {
        As({});
        var _ = (
          /** @type {ComponentContext} */
          ut
        );
        i && (_.c = i), a && (n.$$events = a), f = e(w, n) || {}, Ls();
      },
      l
    );
    var c = /* @__PURE__ */ new Set(), g = (w) => {
      for (var _ = 0; _ < w.length; _++) {
        var $ = w[_];
        if (!c.has($)) {
          c.add($);
          var P = $o($);
          for (const De of [t, document]) {
            var F = Hn.get(De);
            F === void 0 && (F = /* @__PURE__ */ new Map(), Hn.set(De, F));
            var m = F.get($);
            m === void 0 ? (De.addEventListener($, gs, { passive: P }), F.set($, 1)) : F.set($, m + 1);
          }
        }
      }
    };
    return g(ta(hi)), za.add(g), () => {
      for (var w of c)
        for (const P of [t, document]) {
          var _ = (
            /** @type {Map<string, number>} */
            Hn.get(P)
          ), $ = (
            /** @type {number} */
            _.get(w)
          );
          --$ == 0 ? (P.removeEventListener(w, gs), _.delete(w), _.size === 0 && Hn.delete(P)) : _.set(w, $);
        }
      za.delete(g), x !== r && x.parentNode?.removeChild(x);
    };
  });
  return Ha.set(f, u), f;
}
let Ha = /* @__PURE__ */ new WeakMap();
function tl(e, t) {
  const r = Ha.get(e);
  return r ? (Ha.delete(e), r(t)) : Promise.resolve();
}
var mt, Pt, Je, yr, Mn, Sn, ea;
class rl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    Oe(this, "anchor");
    /** @type {Map<Batch, Key>} */
    L(this, mt, /* @__PURE__ */ new Map());
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
    L(this, Pt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    L(this, Je, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    L(this, yr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    L(this, Mn, !0);
    /**
     * @param {Batch} batch
     */
    L(this, Sn, (t) => {
      if (o(this, mt).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, mt).get(t)
        ), n = o(this, Pt).get(r);
        if (n)
          Xa(n), o(this, yr).delete(r);
        else {
          var a = o(this, Je).get(r);
          a && (o(this, Pt).set(r, a.effect), o(this, Je).delete(r), a.fragment.lastChild.remove(), this.anchor.before(a.fragment), n = a.effect);
        }
        for (const [i, d] of o(this, mt)) {
          if (o(this, mt).delete(i), i === t)
            break;
          const l = o(this, Je).get(d);
          l && (Ve(l.effect), o(this, Je).delete(d));
        }
        for (const [i, d] of o(this, Pt)) {
          if (i === r || o(this, yr).has(i)) continue;
          const l = () => {
            if (Array.from(o(this, mt).values()).includes(i)) {
              var u = document.createDocumentFragment();
              es(d, u), u.append(Wt()), o(this, Je).set(i, { effect: d, fragment: u });
            } else
              Ve(d);
            o(this, yr).delete(i), o(this, Pt).delete(i);
          };
          o(this, Mn) || !n ? (o(this, yr).add(i), wr(d, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    L(this, ea, (t) => {
      o(this, mt).delete(t);
      const r = Array.from(o(this, mt).values());
      for (const [n, a] of o(this, Je))
        r.includes(n) || (Ve(a.effect), o(this, Je).delete(n));
    });
    this.anchor = t, A(this, Mn, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      j
    ), a = Ks();
    if (r && !o(this, Pt).has(t) && !o(this, Je).has(t))
      if (a) {
        var i = document.createDocumentFragment(), d = Wt();
        i.append(d), o(this, Je).set(t, {
          effect: ot(() => r(d)),
          fragment: i
        });
      } else
        o(this, Pt).set(
          t,
          ot(() => r(this.anchor))
        );
    if (o(this, mt).set(n, t), a) {
      for (const [l, f] of o(this, Pt))
        l === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [l, f] of o(this, Je))
        l === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(o(this, Sn)), n.ondiscard(o(this, ea));
    } else
      o(this, Sn).call(this, n);
  }
}
mt = new WeakMap(), Pt = new WeakMap(), Je = new WeakMap(), yr = new WeakMap(), Mn = new WeakMap(), Sn = new WeakMap(), ea = new WeakMap();
function E(e, t, r = !1) {
  var n = new rl(e), a = r ? $r : 0;
  function i(d, l) {
    n.ensure(d, l);
  }
  Za(() => {
    var d = !1;
    t((l, f = 0) => {
      d = !0, i(f, l);
    }), d || i(-1, null);
  }, a);
}
function Ea(e, t) {
  return t;
}
function nl(e, t, r) {
  for (var n = [], a = t.length, i, d = t.length, l = 0; l < a; l++) {
    let c = t[l];
    wr(
      c,
      () => {
        if (i) {
          if (i.pending.delete(c), i.done.add(c), i.pending.size === 0) {
            var g = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Va(e, ta(i.done)), g.delete(i), g.size === 0 && (e.outrogroups = null);
          }
        } else
          d -= 1;
      },
      !1
    );
  }
  if (d === 0) {
    var f = n.length === 0 && r !== null;
    if (f) {
      var u = (
        /** @type {Element} */
        r
      ), x = (
        /** @type {Element} */
        u.parentNode
      );
      Ro(x), x.append(u), e.items.clear();
    }
    Va(e, t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function Va(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const d of e.pending.values())
      for (const l of d)
        n.add(
          /** @type {EachItem} */
          e.items.get(l).e
        );
  }
  for (var a = 0; a < t.length; a++) {
    var i = t[a];
    if (n?.has(i)) {
      i.f |= Gt;
      const d = document.createDocumentFragment();
      es(i, d);
    } else
      Ve(t[a], r);
  }
}
var xs;
function Nr(e, t, r, n, a, i = null) {
  var d = e, l = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    d = f.appendChild(Wt());
  }
  var u = null, x = /* @__PURE__ */ Co(() => {
    var m = r();
    return qa(m) ? m : m == null ? [] : ta(m);
  }), c, g = /* @__PURE__ */ new Map(), w = !0;
  function _(m) {
    (F.effect.f & Ct) === 0 && (F.pending.delete(m), F.fallback = u, al(F, c, d, t, n), u !== null && (c.length === 0 ? (u.f & Gt) === 0 ? Xa(u) : (u.f ^= Gt, pn(u, null, d)) : wr(u, () => {
      u = null;
    })));
  }
  function $(m) {
    F.pending.delete(m);
  }
  var P = Za(() => {
    c = /** @type {V[]} */
    s(x);
    for (var m = c.length, De = /* @__PURE__ */ new Set(), Ee = (
      /** @type {Batch} */
      j
    ), Pe = Ks(), Ce = 0; Ce < m; Ce += 1) {
      var zt = c[Ce], Me = n(zt, Ce), pe = w ? null : l.get(Me);
      pe ? (pe.v && Wr(pe.v, zt), pe.i && Wr(pe.i, Ce), Pe && Ee.unskip_effect(pe.e)) : (pe = sl(
        l,
        w ? d : xs ?? (xs = Wt()),
        zt,
        Me,
        Ce,
        a,
        t,
        r
      ), w || (pe.e.f |= Gt), l.set(Me, pe)), De.add(Me);
    }
    if (m === 0 && i && !u && (w ? u = ot(() => i(d)) : (u = ot(() => i(xs ?? (xs = Wt()))), u.f |= Gt)), m > De.size && Yi(), !w)
      if (g.set(Ee, De), Pe) {
        for (const [Qe, lr] of l)
          De.has(Qe) || Ee.skip_effect(lr.e);
        Ee.oncommit(_), Ee.ondiscard($);
      } else
        _(Ee);
    s(x);
  }), F = { effect: P, items: l, pending: g, outrogroups: null, fallback: u };
  w = !1;
}
function vn(e) {
  for (; e !== null && (e.f & Mt) === 0; )
    e = e.next;
  return e;
}
function al(e, t, r, n, a) {
  var i = t.length, d = e.items, l = vn(e.effect.first), f, u = null, x = [], c = [], g, w, _, $;
  for ($ = 0; $ < i; $ += 1) {
    if (g = t[$], w = a(g, $), _ = /** @type {EachItem} */
    d.get(w).e, e.outrogroups !== null)
      for (const Me of e.outrogroups)
        Me.pending.delete(_), Me.done.delete(_);
    if ((_.f & Be) !== 0 && Xa(_), (_.f & Gt) !== 0)
      if (_.f ^= Gt, _ === l)
        pn(_, null, r);
      else {
        var P = u ? u.next : l;
        _ === e.effect.last && (e.effect.last = _.prev), _.prev && (_.prev.next = _.next), _.next && (_.next.prev = _.prev), er(e, u, _), er(e, _, P), pn(_, P, r), u = _, x = [], c = [], l = vn(u.next);
        continue;
      }
    if (_ !== l) {
      if (f !== void 0 && f.has(_)) {
        if (x.length < c.length) {
          var F = c[0], m;
          u = F.prev;
          var De = x[0], Ee = x[x.length - 1];
          for (m = 0; m < x.length; m += 1)
            pn(x[m], F, r);
          for (m = 0; m < c.length; m += 1)
            f.delete(c[m]);
          er(e, De.prev, Ee.next), er(e, u, De), er(e, Ee, F), l = F, u = Ee, $ -= 1, x = [], c = [];
        } else
          f.delete(_), pn(_, l, r), er(e, _.prev, _.next), er(e, _, u === null ? e.effect.first : u.next), er(e, u, _), u = _;
        continue;
      }
      for (x = [], c = []; l !== null && l !== _; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(l), c.push(l), l = vn(l.next);
      if (l === null)
        continue;
    }
    (_.f & Gt) === 0 && x.push(_), u = _, l = vn(_.next);
  }
  if (e.outrogroups !== null) {
    for (const Me of e.outrogroups)
      Me.pending.size === 0 && (Va(e, ta(Me.done)), e.outrogroups?.delete(Me));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var Pe = [];
    if (f !== void 0)
      for (_ of f)
        (_.f & Be) === 0 && Pe.push(_);
    for (; l !== null; )
      (l.f & Be) === 0 && l !== e.fallback && Pe.push(l), l = vn(l.next);
    var Ce = Pe.length;
    if (Ce > 0) {
      var zt = i === 0 ? r : null;
      nl(e, Pe, zt);
    }
  }
}
function sl(e, t, r, n, a, i, d, l) {
  var f = (d & eo) !== 0 ? (d & ro) === 0 ? /* @__PURE__ */ To(r, !1, !1) : Mr(r) : null, u = (d & to) !== 0 ? Mr(a) : null;
  return {
    v: f,
    i: u,
    e: ot(() => (i(t, f ?? r, u ?? a, l), () => {
      e.delete(n);
    }))
  };
}
function pn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, a = e.nodes.end, i = t && (t.f & Gt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tn(n)
      );
      if (i.before(n), n === a)
        return;
      n = d;
    }
}
function er(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function il(e, t) {
  ei(() => {
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
      const a = Js("style");
      a.id = t.hash, a.textContent = t.code, n.appendChild(a);
    }
  });
}
function _i(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var a = e.length;
    for (t = 0; t < a; t++) e[t] && (r = _i(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ol() {
  for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++) (e = arguments[r]) && (t = _i(e)) && (n && (n += " "), n += t);
  return n;
}
function bs(e) {
  return typeof e == "object" ? ol(e) : e ?? "";
}
function ll(e, t, r) {
  var n = e == null ? "" : "" + e;
  return t && (n = n ? n + " " + t : t), n === "" ? null : n;
}
function dl(e, t) {
  return e == null ? null : String(e);
}
function xe(e, t, r, n, a, i) {
  var d = (
    /** @type {any} */
    e[Aa]
  );
  if (d !== r || d === void 0) {
    var l = ll(r, n);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e[Aa] = r;
  }
  return i;
}
function ul(e, t, r, n) {
  var a = (
    /** @type {any} */
    e[La]
  );
  if (a !== t) {
    var i = dl(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e[La] = t;
  }
  return n;
}
function gi(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!qa(t))
      return so();
    for (var n of e.options)
      n.selected = t.includes(yn(n));
    return;
  }
  for (n of e.options) {
    var a = yn(n);
    if (jo(a, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function fl(e) {
  var t = new MutationObserver(() => {
    gi(e, e.__value);
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
  }), Qs(() => {
    t.disconnect();
  });
}
function vl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), a = !0;
  Zs(e, "change", (i) => {
    var d = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(d), yn);
    else {
      var f = e.querySelector(d) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = f && yn(f);
    }
    r(l), e.__value = l, j !== null && n.add(j);
  }), ei(() => {
    var i = t();
    if (e === document.activeElement) {
      var d = (
        /** @type {Batch} */
        j
      );
      if (n.has(d))
        return;
    }
    if (gi(e, i, a), a && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = yn(l), r(i));
    }
    e.__value = i, a = !1;
  }), fl(e);
}
function yn(e) {
  return "__value" in e ? e.__value : e.value;
}
const cl = Symbol("is custom element"), hl = Symbol("is html");
function Ca(e, t, r, n) {
  var a = pl(e);
  a[t] !== (a[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && _l(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function pl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[Vn] ?? (e[Vn] = {
      [cl]: e.nodeName.includes("-"),
      [hl]: e.namespaceURI === Ms
    })
  );
}
var ys = /* @__PURE__ */ new Map();
function _l(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ys.get(t);
  if (r) return r;
  ys.set(t, r = []);
  for (var n, a = e, i = Element.prototype; i !== a; ) {
    n = Fi(a);
    for (var d in n)
      n[d].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      d !== "innerHTML" && d !== "textContent" && d !== "innerText" && r.push(d);
    a = ws(a);
  }
  return r;
}
function gl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Zs(e, "input", async (a) => {
    var i = a ? e.defaultValue : e.value;
    if (i = Ma(e) ? Sa(i) : i, r(i), j !== null && n.add(j), await Uo(), i !== (i = t())) {
      var d = e.selectionStart, l = e.selectionEnd, f = e.value.length;
      if (e.value = i ?? "", l !== null) {
        var u = e.value.length;
        d === l && l === f && u > f ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = d, e.selectionEnd = Math.min(l, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ci(t) == null && e.value && (r(Ma(e) ? Sa(e.value) : e.value), j !== null && n.add(j)), ti(() => {
    var a = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        j
      );
      if (n.has(i))
        return;
    }
    Ma(e) && a === Sa(e.value) || e.type === "date" && !a && !e.value || a !== e.value && (e.value = a ?? "");
  });
}
function Ma(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Sa(e) {
  return e === "" ? null : +e;
}
const xl = "5";
var ms;
typeof window < "u" && ((ms = window.__svelte ?? (window.__svelte = {})).v ?? (ms.v = /* @__PURE__ */ new Set())).add(xl);
var bl = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), yl = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), ml = /* @__PURE__ */ Ie('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'), wl = /* @__PURE__ */ y("<div><!> </div>"), kl = /* @__PURE__ */ y('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width:300px"></div>'), El = /* @__PURE__ */ y('<p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"> </p>'), Cl = /* @__PURE__ */ y('<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/50 backdrop-blur-sm" role="button" tabindex="-1" aria-label="Close modal"></div> <div class="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"><div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700"><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white"> </h3> <!></div> <button aria-label="Close" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-auto p-6"><pre class="text-sm font-mono bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap"> </pre></div></div></div>'), Ml = /* @__PURE__ */ y('<div class="flex justify-center py-16"><svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), Sl = /* @__PURE__ */ y("<span> </span>"), Tl = /* @__PURE__ */ y('<div class="px-4 py-2 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium rounded-lg flex items-center gap-2"><svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Running...</div>'), Al = /* @__PURE__ */ Ie('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Starting...', 1), Ll = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg> Run Now', 1), jl = /* @__PURE__ */ y('<button class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!></button>'), Nl = /* @__PURE__ */ Ie('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Rl = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), Bl = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"> </span>'), Dl = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"> </span>'), Pl = /* @__PURE__ */ y('<p class="text-sm text-gray-600 dark:text-gray-400"> </p>'), Fl = /* @__PURE__ */ y('<div><div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"><span>Step Progress</span> <span> </span></div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full transition-all"></div></div></div>'), Ol = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">Paused</span>'), zl = /* @__PURE__ */ y('<span class="text-xs text-gray-400"> </span>'), Hl = /* @__PURE__ */ y('<div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-2 text-sm"><div class="flex items-center gap-2"><span> </span> <!> <!></div> <button class="text-xs text-blue-600 dark:text-blue-400 hover:underline"> </button></div>'), Vl = /* @__PURE__ */ y('<div><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Schedules</h3> <div class="space-y-2"></div></div>'), Il = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="p-6 space-y-4"><!> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div><span class="block text-gray-500 dark:text-gray-400">Started At</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Stopped At</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Executions</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Progress</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div></div> <!> <!></div></div>'), ql = /* @__PURE__ */ y('<div class="p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400">No steps defined for this task</p></div>'), Ul = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Yl = /* @__PURE__ */ Ie('<svg class="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), $l = /* @__PURE__ */ Ie('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), Gl = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400">async</span>'), Wl = /* @__PURE__ */ y('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), Kl = /* @__PURE__ */ y('<div class="mt-1.5 flex items-center gap-2"><svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <span class="text-xs text-gray-500 dark:text-gray-400 font-mono"> </span> <!></div>'), Jl = /* @__PURE__ */ y('<p class="text-xs text-gray-400 mt-1"> </p>'), Zl = /* @__PURE__ */ y('<button class="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> View Code</button>'), Ql = /* @__PURE__ */ y('<div class="p-4"><div class="flex items-start justify-between gap-3"><div class="flex items-start gap-3"><div><!></div> <div><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-900 dark:text-white"></span> <span> </span> <!></div> <!> <!></div></div> <!></div></div>'), Xl = /* @__PURE__ */ y('<div class="divide-y divide-gray-100 dark:divide-gray-700"></div>'), ed = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><!></div>'), td = /* @__PURE__ */ y('<div class="p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> <p class="text-gray-500 dark:text-gray-400">No executions recorded yet</p></div>'), rd = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center"><svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>'), nd = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center"><svg class="animate-spin w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), ad = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center"><svg class="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>'), sd = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>'), id = /* @__PURE__ */ y('<span class="truncate max-w-xs"> </span>'), od = /* @__PURE__ */ y('<div class="mb-3"><span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Result</span> <p class="mt-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-lg p-3 font-mono whitespace-pre-wrap break-words"> </p></div>'), ld = /* @__PURE__ */ y('<div class="mt-2 flex items-center gap-2 text-sm text-gray-500"><svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Loading logs...</div>'), dd = /* @__PURE__ */ y('<pre class="mt-2 text-xs font-mono bg-gray-900 text-gray-100 rounded-lg p-3 overflow-x-auto max-h-64 overflow-y-auto whitespace-pre-wrap"> </pre>'), ud = /* @__PURE__ */ y('<p class="mt-2 text-sm text-gray-400">No logs available for this execution</p>'), fd = /* @__PURE__ */ y('<div class="px-5 pb-4 pl-16"><!> <div><span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Logs</span> <!></div></div>'), vd = /* @__PURE__ */ y('<div><button class="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-900 dark:text-white truncate"> </span> <span> </span></div> <div class="flex items-center gap-3 mt-0.5 text-xs text-gray-500 dark:text-gray-400"><span> </span> <!></div></div> <div class="flex-shrink-0"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></button> <!></div>'), cd = /* @__PURE__ */ y('<div class="px-5 py-3 border-t border-gray-100 dark:border-gray-700 text-center"><button class="text-sm text-blue-600 dark:text-blue-400 hover:underline">Load more executions...</button></div>'), hd = /* @__PURE__ */ y('<div class="divide-y divide-gray-100 dark:divide-gray-700"></div> <!>', 1), pd = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><!></div>'), _d = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="p-6 border-b border-gray-100 dark:border-gray-700"><div class="flex items-start justify-between gap-4"><div><h2 class="text-xl font-bold text-gray-900 dark:text-white"> </h2> <p class="text-xs text-gray-400 mt-1 font-mono"> </p></div> <!></div></div> <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 flex gap-3"><!> <button class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg flex items-center gap-2"><!> Delete</button></div></div> <div class="mb-6 border-b border-gray-200 dark:border-gray-700"><nav class="flex gap-6" aria-label="Tabs"><button>Overview</button> <button>Steps <!></button> <button>Executions <!></button></nav></div> <!>', 1), gd = /* @__PURE__ */ y('<div class="mb-4"><button class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to tasks</button></div> <!>', 1), xd = /* @__PURE__ */ y('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-sm"><svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg> </div>'), bd = /* @__PURE__ */ y('<div class="flex justify-center items-center py-16"><svg class="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), yd = /* @__PURE__ */ y('<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>'), md = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), wd = /* @__PURE__ */ y('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), kd = /* @__PURE__ */ y('<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 svelte-11d5b98"> </p>'), Ed = /* @__PURE__ */ y('<span class="text-xs text-gray-500"> </span>'), Cd = /* @__PURE__ */ y('<div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span></div> <!>', 1), Md = /* @__PURE__ */ y('<span class="text-xs text-gray-500">One-time task</span>'), Sd = /* @__PURE__ */ Ie('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Td = /* @__PURE__ */ Ie('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>'), Ad = /* @__PURE__ */ y('<button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors"><!> Run</button>'), Ld = /* @__PURE__ */ y("<button> </button>"), jd = /* @__PURE__ */ Ie('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Nd = /* @__PURE__ */ Ie('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), Rd = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"><div class="p-4 border-b border-gray-100 dark:border-gray-700"><div class="flex justify-between items-start gap-2"><div class="flex-1 min-w-0"><h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3> <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p></div> <div class="flex items-center gap-2"><!> <span> </span></div></div></div> <div class="p-4 space-y-3 flex-1"><!> <div class="flex flex-wrap gap-3 text-sm"><!> <button class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline text-xs"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> </button></div></div> <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-xl flex gap-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View</button> <!> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!></button></div></div>'), Bd = /* @__PURE__ */ y('<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"></div>'), Dd = /* @__PURE__ */ y('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), Pd = /* @__PURE__ */ y("<span> </span>"), Fd = /* @__PURE__ */ y("<span> </span> <!>", 1), Od = /* @__PURE__ */ y('<button class="px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors">Run</button>'), zd = /* @__PURE__ */ y("<button> </button>"), Hd = /* @__PURE__ */ y('<div class="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"><div class="flex-shrink-0 flex items-center gap-2"><!> <span> </span></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-medium text-gray-900 dark:text-white truncate"> </h3> <div class="flex items-center gap-3 mt-0.5 text-xs text-gray-500 dark:text-gray-400"><!> <span> </span></div></div> <div class="flex items-center gap-2 flex-shrink-0"><button class="px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">View</button> <!> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div>'), Vd = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700"></div>'), Id = /* @__PURE__ */ y('<!> <div class="flex items-center justify-between mt-6"><button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Previous</button> <span class="text-xs text-gray-500 dark:text-gray-400"> </span> <button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Next</button></div>', 1), qd = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 mb-4"><div class="flex flex-wrap items-center gap-x-4 gap-y-2"><div class="flex items-center gap-4 text-sm"><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium"><!> </span> <span class="text-yellow-600 dark:text-yellow-400 font-medium"> </span> <span class="text-green-600 dark:text-green-400 font-medium"> </span> <span class="text-red-600 dark:text-red-400 font-medium"> </span></div> <div class="flex flex-1 items-center gap-2 ml-auto min-w-0"><div class="flex-1 relative min-w-[150px]"><svg class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search tasks..." class="w-full pl-8 pr-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <select class="w-36 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"><option>All Status</option><option>Running</option><option>Pending</option><option>Completed</option><option>Failed</option></select></div></div></div> <!>', 1), Ud = /* @__PURE__ */ y('<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Task Monitor</h1> <div class="flex items-center gap-2"><div class="inline-flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden"><button aria-label="Grid view"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button> <button aria-label="List view"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div> <button class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div></div> <!> <!>', 1), Yd = /* @__PURE__ */ y('<!> <div class="p-6 max-w-7xl mx-auto"><!> <!></div>', 1);
const $d = {
  hash: "svelte-11d5b98",
  code: ".line-clamp-2.svelte-11d5b98 {display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}"
};
function Gd(e, t) {
  As(t, !0), il(e, $d);
  let r = /* @__PURE__ */ W(Ze([])), n = /* @__PURE__ */ W(!0), a = /* @__PURE__ */ W(""), i = /* @__PURE__ */ W(""), d = /* @__PURE__ */ W(""), l = /* @__PURE__ */ W(Ze([])), f = /* @__PURE__ */ W(0), u = Ze({}), x = Ze({});
  const c = 10;
  let g = /* @__PURE__ */ W(1), w = /* @__PURE__ */ W(0), _ = /* @__PURE__ */ W(null), $ = /* @__PURE__ */ W(!1), P = /* @__PURE__ */ W(Ze([1])), F = /* @__PURE__ */ W(null), m = /* @__PURE__ */ W(null), De = /* @__PURE__ */ W(Ze([])), Ee = /* @__PURE__ */ W(!1), Pe = /* @__PURE__ */ W(null), Ce = /* @__PURE__ */ W(Ze({})), zt = Ze({}), Me = /* @__PURE__ */ W(!1), pe = /* @__PURE__ */ W(null), Qe = /* @__PURE__ */ W("overview"), lr = /* @__PURE__ */ W("grid"), Tr = /* @__PURE__ */ rt(() => ({
    total: s(r).length,
    running: s(r).filter((h) => h.status?.toLowerCase() === "running").length,
    pending: s(r).filter((h) => h.status?.toLowerCase() === "pending").length,
    completed: s(r).filter((h) => h.status?.toLowerCase() === "completed").length,
    failed: s(r).filter((h) => h.status?.toLowerCase() === "failed").length
  })), aa = /* @__PURE__ */ rt(() => s(r).filter((h) => {
    const k = !s(i) || h.name.toLowerCase().includes(s(i).toLowerCase()) || Ln(h.metadata).toLowerCase().includes(s(i).toLowerCase()), B = !s(d) || h.status?.toLowerCase() === s(d).toLowerCase();
    return k && B;
  }));
  function Ar(h, k = "info") {
    const B = Lo(f);
    S(l, [...s(l), { id: B, message: h, type: k }], !0), setTimeout(
      () => {
        S(l, s(l).filter((G) => G.id !== B), !0);
      },
      4e3
    );
  }
  async function dr(h, k = {}) {
    return await t.ctx.callSync(h, k);
  }
  async function Jt() {
    try {
      const h = await dr("get_all_tasks", { from_id: s(g), page_size: c });
      S(r, h?.tasks ?? h?.data?.tasks ?? (Array.isArray(h) ? h : []), !0), S(w, h?.max_id ?? 0, !0), S(_, h?.next_from_id ?? null, !0), S($, h?.has_more ?? !1, !0), S(a, "");
    } catch (h) {
      S(a, "Error loading tasks: " + (h?.message || String(h)));
    } finally {
      S(n, !1);
    }
  }
  function xi() {
    s(_) && (S(P, [...s(P), s(_)], !0), S(g, s(_), !0), Jt());
  }
  function bi() {
    s(P).length > 1 && (S(P, s(P).slice(0, -1), !0), S(g, s(P)[s(P).length - 1], !0), Jt());
  }
  async function Qr(h) {
    S(F, h, !0), S(Ee, !0);
    try {
      const [k, B] = await Promise.all([
        dr("get_task_details", { task_id: h }).catch(() => null),
        dr("get_task_logs", { task_id: h }).catch(() => ({ data: [] }))
      ]), G = k?.task ?? k?.data?.task ?? k?.data ?? k;
      G && (G.executions_count == null && G.executions && (G.executions_count = G.executions.length), G.total_steps = G.steps?.length ?? 0), S(m, G, !0), S(De, B?.data ?? (Array.isArray(B) ? B : []), !0);
    } catch (k) {
      S(a, k?.message || String(k), !0);
    } finally {
      S(Ee, !1);
    }
  }
  function ts() {
    S(F, null), S(m, null), S(De, [], !0), S(Qe, "overview"), S(Pe, null), S(Ce, {}, !0);
  }
  async function yi(h, k) {
    if (s(Pe) === h) {
      S(Pe, null);
      return;
    }
    if (S(Pe, h, !0), !s(Ce)[h]) {
      zt[h] = !0;
      try {
        const B = await dr("get_execution_logs", { logger_name: k, limit: 200 });
        s(Ce)[h] = B?.logs || B?.data?.logs || "No logs available";
      } catch (B) {
        s(Ce)[h] = "Error loading logs: " + (B?.message || String(B));
      } finally {
        delete zt[h];
      }
    }
  }
  function mi(h) {
    S(pe, h, !0), S(Me, !0);
  }
  function sa() {
    S(Me, !1), S(pe, null);
  }
  async function ia(h, k) {
    try {
      const B = await dr("toggle_schedule", { schedule_id: h, disabled: !k });
      Ar(k ? "Schedule resumed" : "Schedule paused", "success"), await Jt();
    } catch (B) {
      Ar(B?.message || "Error toggling schedule", "error");
    }
  }
  async function oa(h) {
    u[h] = !0;
    try {
      const k = await dr("run_task_now", { task_id: h });
      Ar(k?.message || "Task started", "success"), await Jt(), s(F) === h && await Qr(h);
    } catch (k) {
      Ar(k?.message || "Error running task", "error");
    } finally {
      delete u[h];
    }
  }
  async function la(h) {
    x[h] = !0;
    try {
      const k = await dr("delete_task", { task_id: h });
      Ar(k?.message || "Task deleted", "success"), s(F) === h && ts(), await Jt();
    } catch (k) {
      Ar(k?.message || "Error deleting task", "error");
    } finally {
      delete x[h];
    }
  }
  function Xr(h) {
    const k = h?.toLowerCase();
    return k === "running" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : k === "pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : k === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : k === "failed" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
  function Ln(h) {
    if (!h) return "";
    try {
      const k = JSON.parse(h);
      return k.description || k.desc || "";
    } catch {
      return h.length > 80 ? h.substring(0, 80) + "..." : h;
    }
  }
  function da(h) {
    if (!h) return "-";
    const k = h > 1e15 ? h / 1e6 : h > 1e12 ? h : h * 1e3, B = Date.now() - k, G = Math.floor(B / 1e3), Se = Math.floor(G / 60), Te = Math.floor(Se / 60), vt = Math.floor(Te / 24);
    return G < 60 ? "Just now" : Se < 60 ? `${Se}m ago` : Te < 24 ? `${Te}h ago` : `${vt}d ago`;
  }
  function ua(h) {
    if (!h) return "One-time";
    const k = Math.floor(h / 86400), B = Math.floor(h % 86400 / 3600), G = Math.floor(h % 3600 / 60);
    return k > 0 ? `Every ${k}d ${B}h` : B > 0 ? `Every ${B}h ${G}m` : G > 0 ? `Every ${G}m` : `Every ${h}s`;
  }
  function fa(h) {
    if (!h) return "-";
    const k = h > 1e15 ? h / 1e6 : h > 1e12 ? h : h * 1e3;
    return new Date(k).toLocaleString();
  }
  function Xe(h) {
    return h?.status?.toLowerCase() === "running";
  }
  Fo(() => {
    Jt();
    const h = setInterval(Jt, 1e4);
    return () => clearInterval(h);
  });
  var rs = Yd(), ns = Rt(rs);
  {
    var wi = (h) => {
      var k = kl();
      Nr(k, 21, () => s(l), (B) => B.id, (B, G) => {
        var Se = wl(), Te = v(Se);
        {
          var vt = (me) => {
            var ht = bl();
            b(me, ht);
          }, et = (me) => {
            var ht = yl();
            b(me, ht);
          }, ct = (me) => {
            var ht = ml();
            b(me, ht);
          };
          E(Te, (me) => {
            s(G).type === "success" ? me(vt) : s(G).type === "error" ? me(et, 1) : me(ct, -1);
          });
        }
        var Zt = p(Te);
        D(() => {
          xe(Se, 1, `px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
					${s(G).type === "success" ? "bg-green-600 text-white" : ""}
					${s(G).type === "error" ? "bg-red-600 text-white" : ""}
					${s(G).type === "info" ? "bg-blue-600 text-white" : ""}`), M(Zt, ` ${s(G).message ?? ""}`);
        }), b(B, Se);
      }), b(h, k);
    };
    E(ns, (h) => {
      s(l).length > 0 && h(wi);
    });
  }
  var ki = p(ns, 2), as = v(ki);
  {
    var Ei = (h) => {
      var k = Cl(), B = v(k), G = p(B, 2), Se = v(G), Te = v(Se), vt = v(Te), et = v(vt), ct = p(vt, 2);
      {
        var Zt = (Le) => {
          var Ht = El(), en = v(Ht);
          D(() => M(en, s(pe).description)), b(Le, Ht);
        };
        E(ct, (Le) => {
          s(pe).description && Le(Zt);
        });
      }
      var me = p(Te, 2), ht = p(Se, 2), Lr = v(ht), Ae = v(Lr);
      D(() => {
        M(et, s(pe).name), M(Ae, s(pe).code || "No code available");
      }), Z("click", B, sa), Z("keydown", B, (Le) => {
        Le.key === "Escape" && sa();
      }), Z("click", me, sa), b(h, k);
    };
    E(as, (h) => {
      s(Me) && s(pe) && h(Ei);
    });
  }
  var Ci = p(as, 2);
  {
    var Mi = (h) => {
      var k = gd(), B = Rt(k), G = v(B), Se = p(B, 2);
      {
        var Te = (et) => {
          var ct = Ml();
          b(et, ct);
        }, vt = (et) => {
          var ct = _d(), Zt = Rt(ct), me = v(Zt), ht = v(me), Lr = v(ht), Ae = v(Lr), Le = v(Ae), Ht = p(Ae, 2), en = v(Ht), jn = p(Lr, 2);
          {
            var Nn = (N) => {
              var T = Sl(), le = v(T);
              D(
                (je) => {
                  xe(T, 1, `px-2.5 py-1 rounded-full text-xs font-medium ${je ?? ""}`, "svelte-11d5b98"), M(le, s(m).status);
                },
                [() => Xr(s(m).status)]
              ), b(N, T);
            };
            E(jn, (N) => {
              s(m).status && N(Nn);
            });
          }
          var va = p(me, 2), tn = v(va);
          {
            var Rn = (N) => {
              var T = Tl();
              b(N, T);
            }, ca = /* @__PURE__ */ rt(() => Xe(s(m))), ha = (N) => {
              var T = jl(), le = v(T);
              {
                var je = (Q) => {
                  var fe = Al();
                  b(Q, fe);
                }, pt = (Q) => {
                  var fe = Ll();
                  b(Q, fe);
                };
                E(le, (Q) => {
                  u[s(F)] ? Q(je) : Q(pt, -1);
                });
              }
              D(() => T.disabled = u[s(F)]), Z("click", T, () => oa(s(F))), b(N, T);
            };
            E(tn, (N) => {
              s(ca) ? N(Rn) : N(ha, -1);
            });
          }
          var ur = p(tn, 2), pa = v(ur);
          {
            var Bn = (N) => {
              var T = Nl();
              b(N, T);
            }, _a = (N) => {
              var T = Rl();
              b(N, T);
            };
            E(pa, (N) => {
              x[s(F)] ? N(Bn) : N(_a, -1);
            });
          }
          var Dn = p(Zt, 2), ga = v(Dn), rn = v(ga), fr = p(rn, 2), xa = p(v(fr));
          {
            var Pn = (N) => {
              var T = Bl(), le = v(T);
              D(() => M(le, s(m).steps.length)), b(N, T);
            };
            E(xa, (N) => {
              s(m).steps?.length && N(Pn);
            });
          }
          var vr = p(fr, 2), nn = p(v(vr));
          {
            var an = (N) => {
              var T = Dl(), le = v(T);
              D(() => M(le, s(m).executions_count)), b(N, T);
            };
            E(nn, (N) => {
              s(m).executions_count && N(an);
            });
          }
          var sn = p(Dn, 2);
          {
            var Fn = (N) => {
              var T = Il(), le = v(T), je = v(le);
              {
                var pt = (X) => {
                  const de = /* @__PURE__ */ rt(() => Ln(s(m).metadata));
                  var ge = Qo(), Ue = Rt(ge);
                  {
                    var ae = (ve) => {
                      var Ne = Pl(), ke = v(Ne);
                      D(() => M(ke, s(de))), b(ve, Ne);
                    };
                    E(Ue, (ve) => {
                      s(de) && ve(ae);
                    });
                  }
                  b(X, ge);
                };
                E(je, (X) => {
                  s(m).metadata && X(pt);
                });
              }
              var Q = p(je, 2), fe = v(Q), St = p(v(fe), 2), ee = v(St), Vt = p(fe, 2), qe = p(v(Vt), 2), z = v(qe), we = p(Vt, 2), _e = p(v(we), 2), C = v(_e), _t = p(we, 2), gt = p(v(_t), 2), Tt = v(gt), xt = p(Q, 2);
              {
                var At = (X) => {
                  var de = Fl(), ge = v(de), Ue = p(v(ge), 2), ae = v(Ue), ve = p(ge, 2), Ne = v(ve);
                  D(
                    (ke) => {
                      M(ae, `${ke ?? ""}%`), ul(Ne, `width: ${(s(m).step_to_execute ?? 0) / s(m).total_steps * 100}%`);
                    },
                    [
                      () => Math.round((s(m).step_to_execute ?? 0) / s(m).total_steps * 100)
                    ]
                  ), b(X, de);
                };
                E(xt, (X) => {
                  s(m).total_steps > 0 && X(At);
                });
              }
              var tt = p(xt, 2);
              {
                var bt = (X) => {
                  var de = Vl(), ge = p(v(de), 2);
                  Nr(ge, 21, () => s(m).schedules, Ea, (Ue, ae) => {
                    var ve = Hl(), Ne = v(ve), ke = v(Ne), Lt = v(ke), yt = p(ke, 2);
                    {
                      var R = (ne) => {
                        var q = Ol();
                        b(ne, q);
                      };
                      E(yt, (ne) => {
                        s(ae).disabled && ne(R);
                      });
                    }
                    var K = p(yt, 2);
                    {
                      var Ye = (ne) => {
                        var q = zl(), te = v(q);
                        D((ce) => M(te, `Last: ${ce ?? ""}`), [() => da(s(ae).last_run_at)]), b(ne, q);
                      };
                      E(K, (ne) => {
                        s(ae).last_run_at && ne(Ye);
                      });
                    }
                    var I = p(Ne, 2), re = v(I);
                    D(
                      (ne) => {
                        xe(ke, 1, bs(s(ae).disabled ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300")), M(Lt, ne), M(re, s(ae).disabled ? "Resume" : "Pause");
                      },
                      [() => ua(s(ae).repeat_every)]
                    ), Z("click", I, () => ia(s(ae)._id, s(ae).disabled)), b(Ue, ve);
                  }), b(X, de);
                };
                E(tt, (X) => {
                  s(m).schedules?.length > 0 && X(bt);
                });
              }
              D(
                (X, de) => {
                  M(ee, X), M(z, de), M(C, s(m).executions_count ?? "-"), M(Tt, `${s(m).step_to_execute ?? 0 ?? ""} / ${s(m).total_steps ?? 0 ?? ""}`);
                },
                [
                  () => fa(s(m).created_at),
                  () => Xe(s(m)) ? "-" : fa(s(m).updated_at)
                ]
              ), b(N, T);
            }, ba = (N) => {
              var T = ed(), le = v(T);
              {
                var je = (Q) => {
                  var fe = ql();
                  b(Q, fe);
                }, pt = (Q) => {
                  var fe = Xl();
                  Nr(fe, 21, () => s(m).steps, Ea, (St, ee, Vt) => {
                    var qe = Ql(), z = v(qe), we = v(z), _e = v(we), C = v(_e);
                    {
                      var _t = (R) => {
                        var K = Ul();
                        b(R, K);
                      }, gt = (R) => {
                        var K = Yl();
                        b(R, K);
                      }, Tt = (R) => {
                        var K = $l();
                        b(R, K);
                      }, xt = (R) => {
                        var K = Zo();
                        K.nodeValue = Vt + 1, b(R, K);
                      };
                      E(C, (R) => {
                        s(ee).status === "completed" ? R(_t) : s(ee).status === "running" ? R(gt, 1) : s(ee).status === "failed" ? R(Tt, 2) : R(xt, -1);
                      });
                    }
                    var At = p(_e, 2), tt = v(At), bt = v(tt);
                    bt.textContent = `Step ${Vt + 1}`;
                    var X = p(bt, 2), de = v(X), ge = p(X, 2);
                    {
                      var Ue = (R) => {
                        var K = Gl();
                        b(R, K);
                      };
                      E(ge, (R) => {
                        s(ee).is_async && R(Ue);
                      });
                    }
                    var ae = p(tt, 2);
                    {
                      var ve = (R) => {
                        var K = Kl(), Ye = p(v(K), 2), I = v(Ye), re = p(Ye, 2);
                        {
                          var ne = (q) => {
                            var te = Wl(), ce = v(te);
                            D(() => M(ce, `— ${s(ee).codex.description ?? ""}`)), b(q, te);
                          };
                          E(re, (q) => {
                            s(ee).codex.description && q(ne);
                          });
                        }
                        D(() => M(I, s(ee).codex.name)), b(R, K);
                      };
                      E(ae, (R) => {
                        s(ee).codex && R(ve);
                      });
                    }
                    var Ne = p(ae, 2);
                    {
                      var ke = (R) => {
                        var K = Jl(), Ye = v(K);
                        D(() => M(Ye, `Delay before next: ${s(ee).run_next_after ?? ""}s`)), b(R, K);
                      };
                      E(Ne, (R) => {
                        s(ee).run_next_after && R(ke);
                      });
                    }
                    var Lt = p(we, 2);
                    {
                      var yt = (R) => {
                        var K = Zl();
                        Z("click", K, () => mi(s(ee).codex)), b(R, K);
                      };
                      E(Lt, (R) => {
                        s(ee).codex?.code && R(yt);
                      });
                    }
                    D(
                      (R) => {
                        xe(_e, 1, `flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
												${s(ee).status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" : s(ee).status === "running" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" : s(ee).status === "failed" ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"}`), xe(X, 1, `px-1.5 py-0.5 rounded text-xs font-medium ${R ?? ""}`, "svelte-11d5b98"), M(de, s(ee).status || "pending");
                      },
                      [() => Xr(s(ee).status || "pending")]
                    ), b(St, qe);
                  }), b(Q, fe);
                };
                E(le, (Q) => {
                  s(m).steps?.length ? Q(pt, -1) : Q(je);
                });
              }
              b(N, T);
            }, ya = (N) => {
              var T = pd(), le = v(T);
              {
                var je = (Q) => {
                  var fe = td();
                  b(Q, fe);
                }, pt = (Q) => {
                  var fe = hd(), St = Rt(fe);
                  Nr(St, 21, () => s(m).executions, Ea, (qe, z) => {
                    var we = vd(), _e = v(we), C = v(_e), _t = v(C);
                    {
                      var gt = (I) => {
                        var re = rd();
                        b(I, re);
                      }, Tt = (I) => {
                        var re = nd();
                        b(I, re);
                      }, xt = (I) => {
                        var re = ad();
                        b(I, re);
                      }, At = (I) => {
                        var re = sd();
                        b(I, re);
                      };
                      E(_t, (I) => {
                        s(z).status === "completed" ? I(gt) : s(z).status === "running" ? I(Tt, 1) : s(z).status === "failed" ? I(xt, 2) : I(At, -1);
                      });
                    }
                    var tt = p(C, 2), bt = v(tt), X = v(bt), de = v(X), ge = p(X, 2), Ue = v(ge), ae = p(bt, 2), ve = v(ae), Ne = v(ve), ke = p(ve, 2);
                    {
                      var Lt = (I) => {
                        var re = id(), ne = v(re);
                        D((q) => M(ne, `${q ?? ""}${s(z).result.length > 80 ? "..." : ""}`), [() => s(z).result.substring(0, 80)]), b(I, re);
                      };
                      E(ke, (I) => {
                        s(z).result && I(Lt);
                      });
                    }
                    var yt = p(tt, 2), R = v(yt), K = p(_e, 2);
                    {
                      var Ye = (I) => {
                        var re = fd(), ne = v(re);
                        {
                          var q = (se) => {
                            var Fe = od(), jt = p(v(Fe), 2), dn = v(jt);
                            D(() => M(dn, s(z).result)), b(se, Fe);
                          };
                          E(ne, (se) => {
                            s(z).result && se(q);
                          });
                        }
                        var te = p(ne, 2), ce = p(v(te), 2);
                        {
                          var Qt = (se) => {
                            var Fe = ld();
                            b(se, Fe);
                          }, on = (se) => {
                            var Fe = dd(), jt = v(Fe);
                            D(() => M(jt, s(Ce)[s(z)._id])), b(se, Fe);
                          }, ln = (se) => {
                            var Fe = ud();
                            b(se, Fe);
                          };
                          E(ce, (se) => {
                            zt[s(z)._id] ? se(Qt) : s(Ce)[s(z)._id] ? se(on, 1) : se(ln, -1);
                          });
                        }
                        b(I, re);
                      };
                      E(K, (I) => {
                        s(Pe) === s(z)._id && I(Ye);
                      });
                    }
                    D(
                      (I, re) => {
                        M(de, s(z).name || `Execution #${s(z)._id}`), xe(ge, 1, `px-1.5 py-0.5 rounded text-xs font-medium ${I ?? ""}`, "svelte-11d5b98"), M(Ue, s(z).status), M(Ne, re), xe(R, 0, `w-4 h-4 text-gray-400 transition-transform ${s(Pe) === s(z)._id ? "rotate-180" : ""}`);
                      },
                      [
                        () => Xr(s(z).status),
                        () => fa(s(z).created_at)
                      ]
                    ), Z("click", _e, () => yi(s(z)._id, s(z).logger_name)), b(qe, we);
                  });
                  var ee = p(St, 2);
                  {
                    var Vt = (qe) => {
                      var z = cd(), we = v(z);
                      Z("click", we, async () => {
                        S(Ee, !0), await Qr(s(F));
                      }), b(qe, z);
                    };
                    E(ee, (qe) => {
                      s(m).exec_has_more && qe(Vt);
                    });
                  }
                  b(Q, fe);
                };
                E(le, (Q) => {
                  s(m).executions?.length ? Q(pt, -1) : Q(je);
                });
              }
              b(N, T);
            };
            E(sn, (N) => {
              s(Qe) === "overview" ? N(Fn) : s(Qe) === "steps" ? N(ba, 1) : s(Qe) === "executions" && N(ya, 2);
            });
          }
          D(
            (N, T) => {
              M(Le, s(m).name || s(F)), M(en, `ID: ${s(F) ?? ""}`), ur.disabled = N, Ca(ur, "title", T), xe(rn, 1, `pb-3 text-sm font-medium border-b-2 transition-colors
							${s(Qe) === "overview" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`), xe(fr, 1, `pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5
							${s(Qe) === "steps" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`), xe(vr, 1, `pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5
							${s(Qe) === "executions" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`);
            },
            [
              () => x[s(F)] || Xe(s(m)),
              () => Xe(s(m)) ? "Cannot delete a running task" : ""
            ]
          ), Z("click", ur, () => la(s(F))), Z("click", rn, () => S(Qe, "overview")), Z("click", fr, () => S(Qe, "steps")), Z("click", vr, () => S(Qe, "executions")), b(et, ct);
        };
        E(Se, (et) => {
          s(Ee) ? et(Te) : s(m) && et(vt, 1);
        });
      }
      Z("click", G, ts), b(h, k);
    }, Si = (h) => {
      var k = Ud(), B = Rt(k), G = p(v(B), 2), Se = v(G), Te = v(Se), vt = p(Te, 2), et = p(Se, 2), ct = p(B, 2);
      {
        var Zt = (Ae) => {
          var Le = xd(), Ht = p(v(Le));
          D(() => M(Ht, ` ${s(a) ?? ""}`)), b(Ae, Le);
        };
        E(ct, (Ae) => {
          s(a) && Ae(Zt);
        });
      }
      var me = p(ct, 2);
      {
        var ht = (Ae) => {
          var Le = bd();
          b(Ae, Le);
        }, Lr = (Ae) => {
          var Le = qd(), Ht = Rt(Le), en = v(Ht), jn = v(en), Nn = v(jn), va = v(Nn), tn = p(Nn, 2), Rn = v(tn);
          {
            var ca = (T) => {
              var le = yd();
              b(T, le);
            };
            E(Rn, (T) => {
              s(Tr).running > 0 && T(ca);
            });
          }
          var ha = p(Rn), ur = p(tn, 2), pa = v(ur), Bn = p(ur, 2), _a = v(Bn), Dn = p(Bn, 2), ga = v(Dn), rn = p(jn, 2), fr = v(rn), xa = p(v(fr), 2), Pn = p(fr, 2), vr = v(Pn);
          vr.value = vr.__value = "";
          var nn = p(vr);
          nn.value = nn.__value = "running";
          var an = p(nn);
          an.value = an.__value = "pending";
          var sn = p(an);
          sn.value = sn.__value = "completed";
          var Fn = p(sn);
          Fn.value = Fn.__value = "failed";
          var ba = p(Ht, 2);
          {
            var ya = (T) => {
              var le = md(), je = p(v(le), 2), pt = v(je);
              D(() => M(pt, s(i) || s(d) ? "No matching tasks" : "No tasks found")), b(T, le);
            }, N = (T) => {
              var le = Id(), je = Rt(le);
              {
                var pt = (z) => {
                  var we = Bd();
                  Nr(we, 21, () => s(aa), (_e) => _e._id, (_e, C) => {
                    var _t = Rd(), gt = v(_t), Tt = v(gt), xt = v(Tt), At = v(xt), tt = v(At), bt = p(At, 2), X = v(bt), de = p(xt, 2), ge = v(de);
                    {
                      var Ue = (U) => {
                        var J = wd();
                        b(U, J);
                      }, ae = /* @__PURE__ */ rt(() => Xe(s(C)));
                      E(ge, (U) => {
                        s(ae) && U(Ue);
                      });
                    }
                    var ve = p(ge, 2), Ne = v(ve), ke = p(gt, 2), Lt = v(ke);
                    {
                      var yt = (U) => {
                        var J = kd(), $e = v(J);
                        D((Nt) => M($e, Nt), [() => Ln(s(C).metadata)]), b(U, J);
                      }, R = /* @__PURE__ */ rt(() => Ln(s(C).metadata));
                      E(Lt, (U) => {
                        s(R) && U(yt);
                      });
                    }
                    var K = p(Lt, 2), Ye = v(K);
                    {
                      var I = (U) => {
                        const J = /* @__PURE__ */ rt(() => s(C).schedules[0]);
                        var $e = Cd(), Nt = Rt($e), On = p(v(Nt), 2), Xt = v(On), un = p(Nt, 2);
                        {
                          var Li = (fn) => {
                            var ss = Ed(), ji = v(ss);
                            D((Ni) => M(ji, `Last: ${Ni ?? ""}`), [() => da(s(J).last_run_at)]), b(fn, ss);
                          };
                          E(un, (fn) => {
                            s(J).last_run_at && fn(Li);
                          });
                        }
                        D(
                          (fn) => {
                            xe(On, 1, bs(s(J).disabled ? "line-through text-gray-400" : "")), M(Xt, fn);
                          },
                          [() => ua(s(J).repeat_every)]
                        ), b(U, $e);
                      }, re = (U) => {
                        var J = Md();
                        b(U, J);
                      };
                      E(Ye, (U) => {
                        s(C).schedules?.length > 0 ? U(I) : U(re, -1);
                      });
                    }
                    var ne = p(Ye, 2), q = p(v(ne)), te = p(ke, 2), ce = v(te), Qt = p(ce, 2);
                    {
                      var on = (U) => {
                        var J = Ad(), $e = v(J);
                        {
                          var Nt = (Xt) => {
                            var un = Sd();
                            b(Xt, un);
                          }, On = (Xt) => {
                            var un = Td();
                            b(Xt, un);
                          };
                          E($e, (Xt) => {
                            u[s(C)._id] ? Xt(Nt) : Xt(On, -1);
                          });
                        }
                        D(() => J.disabled = u[s(C)._id]), Z("click", J, () => oa(s(C)._id)), b(U, J);
                      }, ln = /* @__PURE__ */ rt(() => !Xe(s(C)));
                      E(Qt, (U) => {
                        s(ln) && U(on);
                      });
                    }
                    var se = p(Qt, 2);
                    {
                      var Fe = (U) => {
                        const J = /* @__PURE__ */ rt(() => s(C).schedules[0]);
                        var $e = Ld(), Nt = v($e);
                        D(() => {
                          xe($e, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${s(J).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), M(Nt, s(J).disabled ? "Resume" : "Pause");
                        }), Z("click", $e, () => ia(s(J)._id, s(J).disabled)), b(U, $e);
                      };
                      E(se, (U) => {
                        s(C).schedules?.length > 0 && U(Fe);
                      });
                    }
                    var jt = p(se, 2), dn = v(jt);
                    {
                      var Ti = (U) => {
                        var J = jd();
                        b(U, J);
                      }, Ai = (U) => {
                        var J = Nd();
                        b(U, J);
                      };
                      E(dn, (U) => {
                        x[s(C)._id] ? U(Ti) : U(Ai, -1);
                      });
                    }
                    D(
                      (U, J, $e, Nt) => {
                        M(tt, s(C).name), M(X, `ID: ${U ?? ""}`), xe(ve, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${J ?? ""}`, "svelte-11d5b98"), M(Ne, s(C).status || "Unknown"), M(q, ` ${s(C).executions_count ?? 0 ?? ""} runs`), jt.disabled = $e, Ca(jt, "title", Nt);
                      },
                      [
                        () => s(C)._id.substring(0, 12),
                        () => Xr(s(C).status),
                        () => x[s(C)._id] || Xe(s(C)),
                        () => Xe(s(C)) ? "Cannot delete a running task" : ""
                      ]
                    ), Z("click", ne, () => Qr(s(C)._id)), Z("click", ce, () => Qr(s(C)._id)), Z("click", jt, () => la(s(C)._id)), b(_e, _t);
                  }), b(z, we);
                }, Q = (z) => {
                  var we = Vd();
                  Nr(we, 21, () => s(aa), (_e) => _e._id, (_e, C) => {
                    var _t = Hd(), gt = v(_t), Tt = v(gt);
                    {
                      var xt = (q) => {
                        var te = Dd();
                        b(q, te);
                      }, At = /* @__PURE__ */ rt(() => Xe(s(C)));
                      E(Tt, (q) => {
                        s(At) && q(xt);
                      });
                    }
                    var tt = p(Tt, 2), bt = v(tt), X = p(gt, 2), de = v(X), ge = v(de), Ue = p(de, 2), ae = v(Ue);
                    {
                      var ve = (q) => {
                        var te = Fd(), ce = Rt(te), Qt = v(ce), on = p(ce, 2);
                        {
                          var ln = (se) => {
                            var Fe = Pd(), jt = v(Fe);
                            D((dn) => M(jt, `Last: ${dn ?? ""}`), [
                              () => da(s(C).schedules[0].last_run_at)
                            ]), b(se, Fe);
                          };
                          E(on, (se) => {
                            s(C).schedules[0].last_run_at && se(ln);
                          });
                        }
                        D((se) => M(Qt, se), [() => ua(s(C).schedules[0].repeat_every)]), b(q, te);
                      };
                      E(ae, (q) => {
                        s(C).schedules?.length > 0 && q(ve);
                      });
                    }
                    var Ne = p(ae, 2), ke = v(Ne), Lt = p(X, 2), yt = v(Lt), R = p(yt, 2);
                    {
                      var K = (q) => {
                        var te = Od();
                        D(() => te.disabled = u[s(C)._id]), Z("click", te, () => oa(s(C)._id)), b(q, te);
                      }, Ye = /* @__PURE__ */ rt(() => !Xe(s(C)));
                      E(R, (q) => {
                        s(Ye) && q(K);
                      });
                    }
                    var I = p(R, 2);
                    {
                      var re = (q) => {
                        const te = /* @__PURE__ */ rt(() => s(C).schedules[0]);
                        var ce = zd(), Qt = v(ce);
                        D(() => {
                          xe(ce, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${s(te).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), M(Qt, s(te).disabled ? "Resume" : "Pause");
                        }), Z("click", ce, () => ia(s(te)._id, s(te).disabled)), b(q, ce);
                      };
                      E(I, (q) => {
                        s(C).schedules?.length > 0 && q(re);
                      });
                    }
                    var ne = p(I, 2);
                    D(
                      (q, te, ce) => {
                        xe(tt, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${q ?? ""}`, "svelte-11d5b98"), M(bt, s(C).status || "Unknown"), M(ge, s(C).name), M(ke, `${s(C).executions_count ?? 0 ?? ""} runs`), ne.disabled = te, Ca(ne, "title", ce);
                      },
                      [
                        () => Xr(s(C).status),
                        () => x[s(C)._id] || Xe(s(C)),
                        () => Xe(s(C)) ? "Cannot delete a running task" : ""
                      ]
                    ), Z("click", yt, () => Qr(s(C)._id)), Z("click", ne, () => la(s(C)._id)), b(_e, _t);
                  }), b(z, we);
                };
                E(je, (z) => {
                  s(lr) === "grid" ? z(pt) : z(Q, -1);
                });
              }
              var fe = p(je, 2), St = v(fe), ee = p(St, 2), Vt = v(ee), qe = p(ee, 2);
              D(() => {
                St.disabled = s(P).length <= 1, M(Vt, `Page ${s(P).length ?? ""}`), qe.disabled = !s($);
              }), Z("click", St, bi), Z("click", qe, xi), b(T, le);
            };
            E(ba, (T) => {
              s(aa).length === 0 ? T(ya) : T(N, -1);
            });
          }
          D(() => {
            M(va, `${s(Tr).total ?? ""} tasks`), M(ha, ` ${s(Tr).running ?? ""} running`), M(pa, `${s(Tr).pending ?? ""} pending`), M(_a, `${s(Tr).completed ?? ""} completed`), M(ga, `${s(Tr).failed ?? ""} failed`);
          }), gl(xa, () => s(i), (T) => S(i, T)), vl(Pn, () => s(d), (T) => S(d, T)), b(Ae, Le);
        };
        E(me, (Ae) => {
          s(n) ? Ae(ht) : Ae(Lr, -1);
        });
      }
      D(() => {
        xe(Te, 1, `px-2.5 py-1.5 transition-colors ${s(lr) === "grid" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`), xe(vt, 1, `px-2.5 py-1.5 transition-colors ${s(lr) === "list" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`);
      }), Z("click", Te, () => S(lr, "grid")), Z("click", vt, () => S(lr, "list")), Z("click", et, Jt), b(h, k);
    };
    E(Ci, (h) => {
      s(F) ? h(Mi) : h(Si, -1);
    });
  }
  b(e, rs), Ls();
}
Go(["click", "keydown"]);
function Jd(e, t) {
  const r = Xo(Gd, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        tl(r);
      } catch {
      }
    }
  };
}
export {
  Jd as default
};
