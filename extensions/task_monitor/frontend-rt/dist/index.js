var Pi = Object.defineProperty;
var ls = (e) => {
  throw TypeError(e);
};
var Fi = (e, t, r) => t in e ? Pi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var ze = (e, t, r) => Fi(e, typeof t != "symbol" ? t + "" : t, r), wa = (e, t, r) => t.has(e) || ls("Cannot " + r);
var o = (e, t, r) => (wa(e, t, "read from private field"), r ? r.call(e) : t.get(e)), N = (e, t, r) => t.has(e) ? ls("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), L = (e, t, r, n) => (wa(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), q = (e, t, r) => (wa(e, t, "access private method"), r);
var Ua = Array.isArray, Oi = Array.prototype.indexOf, Yr = Array.prototype.includes, ra = Array.from, zi = Object.defineProperty, gn = Object.getOwnPropertyDescriptor, Hi = Object.getOwnPropertyDescriptors, Vi = Object.prototype, qi = Array.prototype, Es = Object.getPrototypeOf, ds = Object.isExtensible;
const Ii = () => {
};
function Ui(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Cs() {
  var e, t, r = new Promise((n, s) => {
    e = n, t = s;
  });
  return { promise: r, resolve: e, reject: t };
}
const ke = 2, $r = 4, na = 8, Ms = 1 << 24, wt = 16, Mt = 32, lr = 64, Aa = 128, ut = 512, ce = 1024, we = 2048, Ft = 4096, De = 8192, Ct = 16384, Tr = 32768, us = 1 << 25, Gr = 65536, Kn = 1 << 17, Yi = 1 << 18, Qr = 1 << 19, $i = 1 << 20, Wt = 1 << 25, Cr = 65536, Jn = 1 << 21, Pr = 1 << 22, or = 1 << 23, _n = Symbol("$state"), qn = Symbol("attributes"), La = Symbol("class"), ja = Symbol("style"), cn = Symbol("text"), In = Symbol("form reset"), aa = new class extends Error {
  constructor() {
    super(...arguments);
    ze(this, "name", "StaleReactionError");
    ze(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Gi() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Wi(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Ki(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Ji() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Zi(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Qi() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Xi() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function eo() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function to() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ro() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const no = 1, ao = 2, so = 16, Ss = 1, io = 2, ge = Symbol(), Ts = "http://www.w3.org/1999/xhtml";
function oo() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function lo() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function uo() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function As(e) {
  return e === this.v;
}
function fo(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Ls(e) {
  return !fo(e, this.v);
}
let vt = null;
function Wr(e) {
  vt = e;
}
function js(e, t = !1, r) {
  vt = {
    p: vt,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      V
    ),
    l: null
  };
}
function Ns(e) {
  var t = (
    /** @type {ComponentContext} */
    vt
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      ti(n);
  }
  return t.i = !0, vt = t.p, /** @type {T} */
  {};
}
function Rs() {
  return !0;
}
let hr = [];
function Bs() {
  var e = hr;
  hr = [], Ui(e);
}
function Fr(e) {
  if (hr.length === 0 && !xn) {
    var t = hr;
    queueMicrotask(() => {
      t === hr && Bs();
    });
  }
  hr.push(e);
}
function vo() {
  for (; hr.length > 0; )
    Bs();
}
function Ds(e) {
  var t = V;
  if (t === null)
    return z.f |= or, e;
  if ((t.f & Tr) === 0 && (t.f & $r) === 0)
    throw e;
  ir(e, t);
}
function ir(e, t) {
  for (; t !== null; ) {
    if ((t.f & Aa) !== 0) {
      if ((t.f & Tr) === 0)
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
const co = -7169;
function de(e, t) {
  e.f = e.f & co | t;
}
function Ya(e) {
  (e.f & ut) !== 0 || e.deps === null ? de(e, ce) : de(e, Ft);
}
function Ps(e) {
  if (e !== null)
    for (const t of e)
      (t.f & ke) === 0 || (t.f & Cr) === 0 || (t.f ^= Cr, Ps(
        /** @type {Derived} */
        t.deps
      ));
}
function Fs(e, t, r) {
  (e.f & we) !== 0 ? t.add(e) : (e.f & Ft) !== 0 && r.add(e), Ps(e.deps), de(e, ce);
}
let ka = null, Nr = null, R = null, Na = null, kt = null, Ra = null, xn = !1, Ea = !1, Dr = null, Un = null;
var fs = 0;
let ho = 1;
var Or, nr, _r, zr, Hr, xr, Vr, Ut, wn, Ze, kn, ar, Bt, Dt, qr, Ir, G, Ba, hn, Da, Os, zs, Yn, po, Pa, Br;
const Xn = class Xn {
  constructor() {
    N(this, G);
    ze(this, "id", ho++);
    /** True as soon as `#process` was called */
    N(this, Or, !1);
    ze(this, "linked", !0);
    /** @type {Batch | null} */
    N(this, nr, null);
    /** @type {Batch | null} */
    N(this, _r, null);
    /** @type {Map<Effect, ReturnType<typeof deferred<any>>>} */
    ze(this, "async_deriveds", /* @__PURE__ */ new Map());
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ze(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ze(this, "previous", /* @__PURE__ */ new Map());
    /**
     * Async effects which this batch doesn't take into account anymore when calculating blockers,
     * as it has a value for it already.
     * @type {Set<Effect>}
     */
    ze(this, "unblocked", /* @__PURE__ */ new Set());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, zr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, Hr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    N(this, xr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    N(this, Vr, 0);
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    N(this, Ut, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    N(this, wn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    N(this, Ze, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    N(this, kn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    N(this, ar, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    N(this, Bt, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    N(this, Dt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    N(this, qr, /* @__PURE__ */ new Set());
    ze(this, "is_fork", !1);
    N(this, Ir, !1);
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    o(this, Dt).has(t) || o(this, Dt).set(t, { d: [], m: [] }), o(this, qr).delete(t);
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
      for (var s of n.d)
        de(s, we), r(s);
      for (s of n.m)
        de(s, Ft), r(s);
    }
    o(this, qr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ge && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & or) === 0 && (this.current.set(t, [r, n]), kt?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    R = this;
  }
  deactivate() {
    R = null, kt = null;
  }
  flush() {
    try {
      Ea = !0, R = this, q(this, G, hn).call(this);
    } finally {
      fs = 0, Ra = null, Dr = null, Un = null, Ea = !1, R = null, kt = null, wr.clear();
    }
  }
  discard() {
    for (const t of o(this, Hr)) t(this);
    o(this, Hr).clear(), o(this, xr).clear(), q(this, G, Br).call(this);
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
    if (L(this, Vr, o(this, Vr) + 1), t) {
      let n = o(this, Ut).get(r) ?? 0;
      o(this, Ut).set(r, n + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  decrement(t, r) {
    if (L(this, Vr, o(this, Vr) - 1), t) {
      let n = o(this, Ut).get(r) ?? 0;
      n === 1 ? o(this, Ut).delete(r) : o(this, Ut).set(r, n - 1);
    }
    o(this, Ir) || (L(this, Ir, !0), Fr(() => {
      L(this, Ir, !1), this.linked && this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      o(this, ar).add(n);
    for (const n of r)
      o(this, Bt).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    o(this, zr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    o(this, Hr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    o(this, xr).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of o(this, xr)) t(this);
    o(this, xr).clear();
  }
  settled() {
    return (o(this, wn) ?? L(this, wn, Cs())).promise;
  }
  static ensure() {
    var t;
    if (R === null) {
      const r = R = new Xn();
      q(t = r, G, Pa).call(t), !Ea && !xn && Fr(() => {
        o(r, Or) || r.flush();
      });
    }
    return R;
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
    if (Ra = t, t.b?.is_pending && (t.f & ($r | na | Ms)) !== 0 && (t.f & Tr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Dr !== null && r === V && (z === null || (z.f & ke) === 0))
        return;
      if ((n & (lr | Mt)) !== 0) {
        if ((n & ce) === 0)
          return;
        r.f ^= ce;
      }
    }
    o(this, Ze).push(r);
  }
};
Or = new WeakMap(), nr = new WeakMap(), _r = new WeakMap(), zr = new WeakMap(), Hr = new WeakMap(), xr = new WeakMap(), Vr = new WeakMap(), Ut = new WeakMap(), wn = new WeakMap(), Ze = new WeakMap(), kn = new WeakMap(), ar = new WeakMap(), Bt = new WeakMap(), Dt = new WeakMap(), qr = new WeakMap(), Ir = new WeakMap(), G = new WeakSet(), Ba = function() {
  if (this.is_fork) return !0;
  for (const n of o(this, Ut).keys()) {
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
  var f, u, b;
  if (L(this, Or, !0), fs++ > 1e3 && (q(this, G, Br).call(this), _o()), !q(this, G, Ba).call(this)) {
    for (const h of o(this, ar))
      o(this, Bt).delete(h), de(h, we), this.schedule(h);
    for (const h of o(this, Bt))
      de(h, Ft), this.schedule(h);
  }
  const t = o(this, Ze);
  L(this, Ze, []), this.apply();
  var r = Dr = [], n = [], s = Un = [];
  for (const h of t)
    try {
      q(this, G, Da).call(this, h, r, n);
    } catch (_) {
      throw qs(h), _;
    }
  if (R = null, s.length > 0) {
    var i = Xn.ensure();
    for (const h of s)
      i.schedule(h);
  }
  if (Dr = null, Un = null, q(this, G, Ba).call(this)) {
    q(this, G, Yn).call(this, n), q(this, G, Yn).call(this, r);
    for (const [h, _] of o(this, Dt))
      Vs(h, _);
    s.length > 0 && /** @type {unknown} */
    q(f = R, G, hn).call(f);
    return;
  }
  const d = q(this, G, Os).call(this);
  if (d) {
    q(u = d, G, zs).call(u, this);
    return;
  }
  o(this, ar).clear(), o(this, Bt).clear();
  for (const h of o(this, zr)) h(this);
  o(this, zr).clear(), Na = this, vs(n), vs(r), Na = null, o(this, wn)?.resolve();
  var l = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    R
  );
  if (this.linked && o(this, Vr) === 0 && q(this, G, Br).call(this), o(this, Ze).length > 0) {
    l === null && (l = this, q(this, G, Pa).call(this));
    const h = l;
    o(h, Ze).push(...o(this, Ze).filter((_) => !o(h, Ze).includes(_)));
  }
  l !== null && q(b = l, G, hn).call(b);
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
Da = function(t, r, n) {
  t.f ^= ce;
  for (var s = t.first; s !== null; ) {
    var i = s.f, d = (i & (Mt | lr)) !== 0, l = d && (i & ce) !== 0, f = l || (i & De) !== 0 || o(this, Dt).has(s);
    if (!f && s.fn !== null) {
      d ? s.f ^= ce : (i & $r) !== 0 ? r.push(s) : An(s) && ((i & wt) !== 0 && o(this, Bt).add(s), Jr(s));
      var u = s.first;
      if (u !== null) {
        s = u;
        continue;
      }
    }
    for (; s !== null; ) {
      var b = s.next;
      if (b !== null) {
        s = b;
        break;
      }
      s = s.parent;
    }
  }
}, Os = function() {
  for (var t = o(this, nr); t !== null; ) {
    if (!t.is_fork) {
      for (const [r, [, n]] of this.current)
        if (t.current.has(r) && !n)
          return t;
    }
    t = o(t, nr);
  }
  return null;
}, /**
 * @param {Batch} batch
 */
zs = function(t) {
  var n;
  for (const [s, i] of t.current)
    !this.previous.has(s) && t.previous.has(s) && this.previous.set(s, t.previous.get(s)), this.current.set(s, i);
  for (const [s, i] of t.async_deriveds) {
    const d = this.async_deriveds.get(s);
    d && i.promise.then(d.resolve);
  }
  const r = (s) => {
    var i = s.reactions;
    if (i !== null)
      for (const f of i) {
        var d = f.f;
        if ((d & ke) !== 0)
          r(
            /** @type {Derived} */
            f
          );
        else {
          var l = (
            /** @type {Effect} */
            f
          );
          d & (Pr | wt) && !this.async_deriveds.has(l) && (o(this, Bt).delete(l), de(l, we), this.schedule(l));
        }
      }
  };
  for (const s of this.current.keys())
    r(s);
  this.oncommit(() => t.discard()), q(n = t, G, Br).call(n), R = this, q(this, G, hn).call(this);
}, /**
 * @param {Effect[]} effects
 */
Yn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Fs(t[r], o(this, ar), o(this, Bt));
}, po = function() {
  var b;
  q(this, G, Br).call(this);
  for (let h = ka; h !== null; h = o(h, _r)) {
    var t = h.id < this.id, r = [];
    for (const [_, [k, g]] of this.current) {
      if (h.current.has(_)) {
        var n = (
          /** @type {[any, boolean]} */
          h.current.get(_)[0]
        );
        if (t && k !== n)
          h.current.set(_, [k, g]);
        else
          continue;
      }
      r.push(_);
    }
    if (t)
      for (const [_, k] of this.async_deriveds) {
        const g = h.async_deriveds.get(_);
        g && k.promise.then(g.resolve);
      }
    if (o(h, Or)) {
      var s = [...h.current.keys()].filter((_) => !this.current.has(_));
      if (s.length === 0)
        t && h.discard();
      else if (r.length > 0) {
        if (t)
          for (const _ of o(this, qr))
            h.unskip_effect(_, (k) => {
              var g;
              (k.f & (wt | Pr)) !== 0 ? h.schedule(k) : q(g = h, G, Yn).call(g, [k]);
            });
        h.activate();
        var i = /* @__PURE__ */ new Set(), d = /* @__PURE__ */ new Map();
        for (var l of r)
          Hs(l, s, i, d);
        d = /* @__PURE__ */ new Map();
        var f = [...h.current.keys()].filter(
          (_) => this.current.has(_) ? (
            /** @type {[any, boolean]} */
            this.current.get(_)[0] !== _.v
          ) : !0
        );
        if (f.length > 0)
          for (const _ of o(this, kn))
            (_.f & (Ct | De | Kn)) === 0 && $a(_, f, d) && ((_.f & (Pr | wt)) !== 0 ? (de(_, we), h.schedule(_)) : o(h, ar).add(_));
        if (o(h, Ze).length > 0) {
          h.apply();
          for (var u of o(h, Ze))
            q(b = h, G, Da).call(b, u, [], []);
          L(h, Ze, []);
        }
        h.deactivate();
      }
    }
  }
}, Pa = function() {
  Nr === null ? ka = Nr = this : (L(Nr, _r, this), L(this, nr, Nr)), Nr = this;
}, Br = function() {
  var t = o(this, nr), r = o(this, _r);
  t === null ? ka = r : L(t, _r, r), r === null ? Nr = t : L(r, nr, t), this.linked = !1;
};
let Mr = Xn;
function go(e) {
  var t = xn;
  xn = !0;
  try {
    for (var r; ; ) {
      if (vo(), R === null)
        return (
          /** @type {T} */
          r
        );
      R.flush();
    }
  } finally {
    xn = t;
  }
}
function _o() {
  try {
    Qi();
  } catch (e) {
    ir(e, Ra);
  }
}
let It = null;
function vs(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ct | De)) === 0 && An(n) && (It = /* @__PURE__ */ new Set(), Jr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && si(n), It?.size > 0)) {
        wr.clear();
        for (const s of It) {
          if ((s.f & (Ct | De)) !== 0) continue;
          const i = [s];
          let d = s.parent;
          for (; d !== null; )
            It.has(d) && (It.delete(d), i.push(d)), d = d.parent;
          for (let l = i.length - 1; l >= 0; l--) {
            const f = i[l];
            (f.f & (Ct | De)) === 0 && Jr(f);
          }
        }
        It.clear();
      }
    }
    It = null;
  }
}
function Hs(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const s of e.reactions) {
      const i = s.f;
      (i & ke) !== 0 ? Hs(
        /** @type {Derived} */
        s,
        t,
        r,
        n
      ) : (i & (Pr | wt)) !== 0 && (i & we) === 0 && $a(s, t, n) && (de(s, we), Ga(
        /** @type {Effect} */
        s
      ));
    }
}
function $a(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const s of e.deps) {
      if (Yr.call(t, s))
        return !0;
      if ((s.f & ke) !== 0 && $a(
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
function Ga(e) {
  R.schedule(e);
}
function Vs(e, t) {
  if (!((e.f & Mt) !== 0 && (e.f & ce) !== 0)) {
    (e.f & we) !== 0 ? t.d.push(e) : (e.f & Ft) !== 0 && t.m.push(e), de(e, ce);
    for (var r = e.first; r !== null; )
      Vs(r, t), r = r.next;
  }
}
function qs(e) {
  de(e, ce);
  for (var t = e.first; t !== null; )
    qs(t), t = t.next;
}
function xo(e) {
  let t = 0, r = Sr(0), n;
  return () => {
    Za() && (a(r), ni(() => (t === 0 && (n = pi(() => e(() => bn(r)))), t += 1, () => {
      Fr(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, bn(r));
      });
    })));
  };
}
var bo = Gr | Qr;
function yo(e, t, r, n) {
  new mo(e, t, r, n);
}
var it, Ia, ot, br, He, lt, Be, Qe, Yt, yr, sr, Ur, En, Cn, $t, ea, ue, wo, ko, Eo, Fa, $n, Gn, Oa, za;
class mo {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, s) {
    N(this, ue);
    /** @type {Boundary | null} */
    ze(this, "parent");
    ze(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ze(this, "transform_error");
    /** @type {TemplateNode} */
    N(this, it);
    /** @type {TemplateNode | null} */
    N(this, Ia, null);
    /** @type {BoundaryProps} */
    N(this, ot);
    /** @type {((anchor: Node) => void)} */
    N(this, br);
    /** @type {Effect} */
    N(this, He);
    /** @type {Effect | null} */
    N(this, lt, null);
    /** @type {Effect | null} */
    N(this, Be, null);
    /** @type {Effect | null} */
    N(this, Qe, null);
    /** @type {DocumentFragment | null} */
    N(this, Yt, null);
    N(this, yr, 0);
    N(this, sr, 0);
    N(this, Ur, !1);
    /** @type {Set<Effect>} */
    N(this, En, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    N(this, Cn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    N(this, $t, null);
    N(this, ea, xo(() => (L(this, $t, Sr(o(this, yr))), () => {
      L(this, $t, null);
    })));
    L(this, it, t), L(this, ot, r), L(this, br, (i) => {
      var d = (
        /** @type {Effect} */
        V
      );
      d.b = this, d.f |= Aa, n(i);
    }), this.parent = /** @type {Effect} */
    V.b, this.transform_error = s ?? this.parent?.transform_error ?? ((i) => i), L(this, He, Qa(() => {
      q(this, ue, Fa).call(this);
    }, bo));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Fs(t, o(this, En), o(this, Cn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!o(this, ot).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    q(this, ue, Oa).call(this, t, r), L(this, yr, o(this, yr) + t), !(!o(this, $t) || o(this, Ur)) && (L(this, Ur, !0), Fr(() => {
      L(this, Ur, !1), o(this, $t) && Kr(o(this, $t), o(this, yr));
    }));
  }
  get_effect_pending() {
    return o(this, ea).call(this), a(
      /** @type {Source<number>} */
      o(this, $t)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!o(this, ot).onerror && !o(this, ot).failed)
      throw t;
    R?.is_fork ? (o(this, lt) && R.skip_effect(o(this, lt)), o(this, Be) && R.skip_effect(o(this, Be)), o(this, Qe) && R.skip_effect(o(this, Qe)), R.on_fork_commit(() => {
      q(this, ue, za).call(this, t);
    })) : q(this, ue, za).call(this, t);
  }
}
it = new WeakMap(), Ia = new WeakMap(), ot = new WeakMap(), br = new WeakMap(), He = new WeakMap(), lt = new WeakMap(), Be = new WeakMap(), Qe = new WeakMap(), Yt = new WeakMap(), yr = new WeakMap(), sr = new WeakMap(), Ur = new WeakMap(), En = new WeakMap(), Cn = new WeakMap(), $t = new WeakMap(), ea = new WeakMap(), ue = new WeakSet(), wo = function() {
  try {
    L(this, lt, dt(() => o(this, br).call(this, o(this, it))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ko = function(t) {
  const r = o(this, ot).failed;
  r && L(this, Qe, dt(() => {
    r(
      o(this, it),
      () => t,
      () => () => {
      }
    );
  }));
}, Eo = function() {
  const t = o(this, ot).pending;
  t && (this.is_pending = !0, L(this, Be, dt(() => t(o(this, it)))), Fr(() => {
    var r = L(this, Yt, document.createDocumentFragment()), n = Kt();
    r.append(n), L(this, lt, q(this, ue, Gn).call(this, () => dt(() => o(this, br).call(this, n)))), o(this, sr) === 0 && (o(this, it).before(r), L(this, Yt, null), kr(
      /** @type {Effect} */
      o(this, Be),
      () => {
        L(this, Be, null);
      }
    ), q(this, ue, $n).call(
      this,
      /** @type {Batch} */
      R
    ));
  }));
}, Fa = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), L(this, sr, 0), L(this, yr, 0), L(this, lt, dt(() => {
      o(this, br).call(this, o(this, it));
    })), o(this, sr) > 0) {
      var t = L(this, Yt, document.createDocumentFragment());
      ts(o(this, lt), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        o(this, ot).pending
      );
      L(this, Be, dt(() => r(o(this, it))));
    } else
      q(this, ue, $n).call(
        this,
        /** @type {Batch} */
        R
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
$n = function(t) {
  this.is_pending = !1, t.transfer_effects(o(this, En), o(this, Cn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Gn = function(t) {
  var r = V, n = z, s = vt;
  Ot(o(this, He)), ct(o(this, He)), Wr(o(this, He).ctx);
  try {
    return Mr.ensure(), t();
  } catch (i) {
    return Ds(i), null;
  } finally {
    Ot(r), ct(n), Wr(s);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Oa = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && q(n = this.parent, ue, Oa).call(n, t, r);
    return;
  }
  L(this, sr, o(this, sr) + t), o(this, sr) === 0 && (q(this, ue, $n).call(this, r), o(this, Be) && kr(o(this, Be), () => {
    L(this, Be, null);
  }), o(this, Yt) && (o(this, it).before(o(this, Yt)), L(this, Yt, null)));
}, /**
 * @param {unknown} error
 */
za = function(t) {
  o(this, lt) && (Ie(o(this, lt)), L(this, lt, null)), o(this, Be) && (Ie(o(this, Be)), L(this, Be, null)), o(this, Qe) && (Ie(o(this, Qe)), L(this, Qe, null));
  var r = o(this, ot).onerror;
  let n = o(this, ot).failed;
  var s = !1, i = !1;
  const d = () => {
    if (s) {
      uo();
      return;
    }
    s = !0, i && ro(), o(this, Qe) !== null && kr(o(this, Qe), () => {
      L(this, Qe, null);
    }), q(this, ue, Gn).call(this, () => {
      q(this, ue, Fa).call(this);
    });
  }, l = (f) => {
    try {
      i = !0, r?.(f, d), i = !1;
    } catch (u) {
      ir(u, o(this, He) && o(this, He).parent);
    }
    n && L(this, Qe, q(this, ue, Gn).call(this, () => {
      try {
        return dt(() => {
          var u = (
            /** @type {Effect} */
            V
          );
          u.b = this, u.f |= Aa, n(
            o(this, it),
            () => f,
            () => d
          );
        });
      } catch (u) {
        return ir(
          u,
          /** @type {Effect} */
          o(this, He).parent
        ), null;
      }
    }));
  };
  Fr(() => {
    var f;
    try {
      f = this.transform_error(t);
    } catch (u) {
      ir(u, o(this, He) && o(this, He).parent);
      return;
    }
    f !== null && typeof f == "object" && typeof /** @type {any} */
    f.then == "function" ? f.then(
      l,
      /** @param {unknown} e */
      (u) => ir(u, o(this, He) && o(this, He).parent)
    ) : l(f);
  });
};
function Co(e, t, r, n) {
  const s = Wa;
  var i = e.filter((_) => !_.settled);
  if (r.length === 0 && i.length === 0) {
    n(t.map(s));
    return;
  }
  var d = (
    /** @type {Effect} */
    V
  ), l = Mo(), f = i.length === 1 ? i[0].promise : i.length > 1 ? Promise.all(i.map((_) => _.promise)) : null;
  function u(_) {
    if ((d.f & Ct) === 0) {
      l();
      try {
        n(_);
      } catch (k) {
        ir(k, d);
      }
      Zn();
    }
  }
  var b = Is();
  if (r.length === 0) {
    f.then(() => u(t.map(s))).finally(b);
    return;
  }
  function h() {
    Promise.all(r.map((_) => /* @__PURE__ */ So(_))).then((_) => u([...t.map(s), ..._])).catch((_) => ir(_, d)).finally(b);
  }
  f ? f.then(() => {
    l(), h(), Zn();
  }) : h();
}
function Mo() {
  var e = (
    /** @type {Effect} */
    V
  ), t = z, r = vt, n = (
    /** @type {Batch} */
    R
  );
  return function(i = !0) {
    Ot(e), ct(t), Wr(r), i && (e.f & Ct) === 0 && (n?.activate(), n?.apply());
  };
}
function Zn(e = !0) {
  Ot(null), ct(null), Wr(null), e && R?.deactivate();
}
function Is() {
  var e = (
    /** @type {Effect} */
    V
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    R
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), () => {
    t.update_pending_count(-1, r), r.decrement(n, e);
  };
}
// @__NO_SIDE_EFFECTS__
function Wa(e) {
  var t = ke | we;
  return V !== null && (V.f |= Qr), {
    ctx: vt,
    deps: null,
    effects: null,
    equals: As,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ge
    ),
    wv: 0,
    parent: V,
    ac: null
  };
}
const Hn = Symbol("obsolete");
// @__NO_SIDE_EFFECTS__
function So(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    V
  );
  n === null && Gi();
  var s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Sr(
    /** @type {V} */
    ge
  ), d = !z, l = /* @__PURE__ */ new Set();
  return qo(() => {
    var f = (
      /** @type {Effect} */
      V
    ), u = Cs();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, (k) => {
        k !== aa && u.reject(k);
      }).finally(Zn);
    } catch (k) {
      u.reject(k), Zn();
    }
    var b = (
      /** @type {Batch} */
      R
    );
    if (d) {
      if ((f.f & Tr) !== 0)
        var h = Is();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        b.async_deriveds.get(f)?.reject(Hn);
      else
        for (const k of l.values())
          k.reject(Hn);
      l.add(u), b.async_deriveds.set(f, u);
    }
    const _ = (k, g = void 0) => {
      h?.(), l.delete(u), g !== Hn && (b.activate(), g ? (i.f |= or, Kr(i, g)) : ((i.f & or) !== 0 && (i.f ^= or), Kr(i, k)), b.deactivate());
    };
    u.promise.then(_, (k) => _(null, k || "unknown"));
  }), ei(() => {
    for (const f of l)
      f.reject(Hn);
  }), new Promise((f) => {
    function u(b) {
      function h() {
        b === s ? f(i) : u(s);
      }
      b.then(h, h);
    }
    u(s);
  });
}
// @__NO_SIDE_EFFECTS__
function at(e) {
  const t = /* @__PURE__ */ Wa(e);
  return li(t), t;
}
// @__NO_SIDE_EFFECTS__
function To(e) {
  const t = /* @__PURE__ */ Wa(e);
  return t.equals = Ls, t;
}
function Ao(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ie(
        /** @type {Effect} */
        t[r]
      );
  }
}
function Ka(e) {
  var t, r = V, n = e.parent;
  if (!dr && n !== null && (n.f & (Ct | De)) !== 0)
    return oo(), e.v;
  Ot(n);
  try {
    e.f &= ~Cr, Ao(e), t = vi(e);
  } finally {
    Ot(r);
  }
  return t;
}
function Us(e) {
  var t = Ka(e);
  if (!e.equals(t) && (e.wv = ui(), (!R?.is_fork || e.deps === null) && (R !== null ? (R.capture(e, t, !0), Na?.capture(e, t, !0)) : e.v = t, e.deps === null))) {
    de(e, ce);
    return;
  }
  dr || (kt !== null ? (Za() || R?.is_fork) && kt.set(e, t) : Ya(e));
}
function Lo(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(aa), t.teardown = Ii, t.ac = null, mn(t, 0), Xa(t));
}
function Ys(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && Jr(t);
}
let Qn = /* @__PURE__ */ new Set();
const wr = /* @__PURE__ */ new Map();
let $s = !1;
function Sr(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: As,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function K(e, t) {
  const r = Sr(e);
  return li(r), r;
}
// @__NO_SIDE_EFFECTS__
function jo(e, t = !1, r = !0) {
  const n = Sr(e);
  return t || (n.equals = Ls), n;
}
function T(e, t, r = !1) {
  z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Et || (z.f & Kn) !== 0) && Rs() && (z.f & (ke | wt | Pr | Kn)) !== 0 && (ft === null || !Yr.call(ft, e)) && to();
  let n = r ? Ve(t) : t;
  return Kr(e, n, Un);
}
function Kr(e, t, r = null) {
  if (!e.equals(t)) {
    wr.set(e, dr ? t : e.v);
    var n = Mr.ensure();
    if (n.capture(e, t), (e.f & ke) !== 0) {
      const s = (
        /** @type {Derived} */
        e
      );
      (e.f & we) !== 0 && Ka(s), kt === null && Ya(s);
    }
    e.wv = ui(), Gs(e, we, r), V !== null && (V.f & ce) !== 0 && (V.f & (Mt | lr)) === 0 && (st === null ? Yo([e]) : st.push(e)), !n.is_fork && Qn.size > 0 && !$s && No();
  }
  return t;
}
function No() {
  $s = !1;
  for (const e of Qn) {
    (e.f & ce) !== 0 && de(e, Ft);
    let t;
    try {
      t = An(e);
    } catch {
      t = !0;
    }
    t && Jr(e);
  }
  Qn.clear();
}
function Ro(e, t = 1) {
  var r = a(e);
  return T(e, t === 1 ? ++r : --r);
}
function bn(e) {
  T(e, e.v + 1);
}
function Gs(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var s = n.length, i = 0; i < s; i++) {
      var d = n[i], l = d.f, f = (l & we) === 0;
      if (f && de(d, t), (l & Kn) !== 0)
        Qn.add(
          /** @type {Effect} */
          d
        );
      else if ((l & ke) !== 0) {
        var u = (
          /** @type {Derived} */
          d
        );
        kt?.delete(u), (l & Cr) === 0 && (l & ut && (V === null || (V.f & Jn) === 0) && (d.f |= Cr), Gs(u, Ft, r));
      } else if (f) {
        var b = (
          /** @type {Effect} */
          d
        );
        (l & wt) !== 0 && It !== null && It.add(b), r !== null ? r.push(b) : Ga(b);
      }
    }
}
function Ve(e) {
  if (typeof e != "object" || e === null || _n in e)
    return e;
  const t = Es(e);
  if (t !== Vi && t !== qi)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Ua(e), s = /* @__PURE__ */ K(0), i = Er, d = (l) => {
    if (Er === i)
      return l();
    var f = z, u = Er;
    ct(null), _s(i);
    var b = l();
    return ct(f), _s(u), b;
  };
  return n && r.set("length", /* @__PURE__ */ K(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(l, f, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && Xi();
        var b = r.get(f);
        return b === void 0 ? d(() => {
          var h = /* @__PURE__ */ K(u.value);
          return r.set(f, h), h;
        }) : T(b, u.value, !0), !0;
      },
      deleteProperty(l, f) {
        var u = r.get(f);
        if (u === void 0) {
          if (f in l) {
            const b = d(() => /* @__PURE__ */ K(ge));
            r.set(f, b), bn(s);
          }
        } else
          T(u, ge), bn(s);
        return !0;
      },
      get(l, f, u) {
        if (f === _n)
          return e;
        var b = r.get(f), h = f in l;
        if (b === void 0 && (!h || gn(l, f)?.writable) && (b = d(() => {
          var k = Ve(h ? l[f] : ge), g = /* @__PURE__ */ K(k);
          return g;
        }), r.set(f, b)), b !== void 0) {
          var _ = a(b);
          return _ === ge ? void 0 : _;
        }
        return Reflect.get(l, f, u);
      },
      getOwnPropertyDescriptor(l, f) {
        var u = Reflect.getOwnPropertyDescriptor(l, f);
        if (u && "value" in u) {
          var b = r.get(f);
          b && (u.value = a(b));
        } else if (u === void 0) {
          var h = r.get(f), _ = h?.v;
          if (h !== void 0 && _ !== ge)
            return {
              enumerable: !0,
              configurable: !0,
              value: _,
              writable: !0
            };
        }
        return u;
      },
      has(l, f) {
        if (f === _n)
          return !0;
        var u = r.get(f), b = u !== void 0 && u.v !== ge || Reflect.has(l, f);
        if (u !== void 0 || V !== null && (!b || gn(l, f)?.writable)) {
          u === void 0 && (u = d(() => {
            var _ = b ? Ve(l[f]) : ge, k = /* @__PURE__ */ K(_);
            return k;
          }), r.set(f, u));
          var h = a(u);
          if (h === ge)
            return !1;
        }
        return b;
      },
      set(l, f, u, b) {
        var h = r.get(f), _ = f in l;
        if (n && f === "length")
          for (var k = u; k < /** @type {Source<number>} */
          h.v; k += 1) {
            var g = r.get(k + "");
            g !== void 0 ? T(g, ge) : k in l && (g = d(() => /* @__PURE__ */ K(ge)), r.set(k + "", g));
          }
        if (h === void 0)
          (!_ || gn(l, f)?.writable) && (h = d(() => /* @__PURE__ */ K(void 0)), T(h, Ve(u)), r.set(f, h));
        else {
          _ = h.v !== ge;
          var W = d(() => Ve(u));
          T(h, W);
        }
        var O = Reflect.getOwnPropertyDescriptor(l, f);
        if (O?.set && O.set.call(b, u), !_) {
          if (n && typeof f == "string") {
            var B = (
              /** @type {Source<number>} */
              r.get("length")
            ), m = Number(f);
            Number.isInteger(m) && m >= B.v && T(B, m + 1);
          }
          bn(s);
        }
        return !0;
      },
      ownKeys(l) {
        a(s);
        var f = Reflect.ownKeys(l).filter((h) => {
          var _ = r.get(h);
          return _ === void 0 || _.v !== ge;
        });
        for (var [u, b] of r)
          b.v !== ge && !(u in l) && f.push(u);
        return f;
      },
      setPrototypeOf() {
        eo();
      }
    }
  );
}
function cs(e) {
  try {
    if (e !== null && typeof e == "object" && _n in e)
      return e[_n];
  } catch {
  }
  return e;
}
function Bo(e, t) {
  return Object.is(cs(e), cs(t));
}
var hs, Ws, Ks, Js;
function Do() {
  if (hs === void 0) {
    hs = window, Ws = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    Ks = gn(t, "firstChild").get, Js = gn(t, "nextSibling").get, ds(e) && (e[La] = void 0, e[qn] = null, e[ja] = void 0, e.__e = void 0), ds(r) && (r[cn] = void 0);
  }
}
function Kt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Gt(e) {
  return (
    /** @type {TemplateNode | null} */
    Ks.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Tn(e) {
  return (
    /** @type {TemplateNode | null} */
    Js.call(e)
  );
}
function v(e, t) {
  return /* @__PURE__ */ Gt(e);
}
function Rt(e, t = !1) {
  {
    var r = /* @__PURE__ */ Gt(e);
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
function Po(e) {
  e.textContent = "";
}
function Zs() {
  return !1;
}
function Qs(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(Ts, e, void 0)
  );
}
let ps = !1;
function Fo() {
  ps || (ps = !0, document.addEventListener(
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
function Ja(e) {
  var t = z, r = V;
  ct(null), Ot(null);
  try {
    return e();
  } finally {
    ct(t), Ot(r);
  }
}
function Xs(e, t, r, n = r) {
  e.addEventListener(t, () => Ja(r));
  const s = (
    /** @type {any} */
    e[In]
  );
  s ? e[In] = () => {
    s(), n(!0);
  } : e[In] = () => n(!0), Fo();
}
function Oo(e) {
  V === null && (z === null && Zi(), Ji()), dr && Ki();
}
function zo(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function Jt(e, t) {
  var r = V;
  r !== null && (r.f & De) !== 0 && (e |= De);
  var n = {
    ctx: vt,
    deps: null,
    nodes: null,
    f: e | we | ut,
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
  R?.register_created_effect(n);
  var s = n;
  if ((e & $r) !== 0)
    Dr !== null ? Dr.push(n) : Mr.ensure().schedule(n);
  else if (t !== null) {
    try {
      Jr(n);
    } catch (d) {
      throw Ie(n), d;
    }
    s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
    (s.f & Qr) === 0 && (s = s.first, (e & wt) !== 0 && (e & Gr) !== 0 && s !== null && (s.f |= Gr));
  }
  if (s !== null && (s.parent = r, r !== null && zo(s, r), z !== null && (z.f & ke) !== 0 && (e & lr) === 0)) {
    var i = (
      /** @type {Derived} */
      z
    );
    (i.effects ?? (i.effects = [])).push(s);
  }
  return n;
}
function Za() {
  return z !== null && !Et;
}
function ei(e) {
  const t = Jt(na, null);
  return de(t, ce), t.teardown = e, t;
}
function Ho(e) {
  Oo();
  var t = (
    /** @type {Effect} */
    V.f
  ), r = !z && (t & Mt) !== 0 && (t & Tr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      vt
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return ti(e);
}
function ti(e) {
  return Jt($r | $i, e);
}
function Vo(e) {
  Mr.ensure();
  const t = Jt(lr | Qr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? kr(t, () => {
      Ie(t), n(void 0);
    }) : (Ie(t), n(void 0));
  });
}
function ri(e) {
  return Jt($r, e);
}
function qo(e) {
  return Jt(Pr | Qr, e);
}
function ni(e, t = 0) {
  return Jt(na | t, e);
}
function F(e, t = [], r = [], n = []) {
  Co(n, t, r, (s) => {
    Jt(na, () => e(...s.map(a)));
  });
}
function Qa(e, t = 0) {
  var r = Jt(wt | t, e);
  return r;
}
function dt(e) {
  return Jt(Mt | Qr, e);
}
function ai(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = dr, n = z;
    gs(!0), ct(null);
    try {
      t.call(null);
    } finally {
      gs(r), ct(n);
    }
  }
}
function Xa(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const s = r.ac;
    s !== null && Ja(() => {
      s.abort(aa);
    });
    var n = r.next;
    (r.f & lr) !== 0 ? r.parent = null : Ie(r, t), r = n;
  }
}
function Io(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & Mt) === 0 && Ie(t), t = r;
  }
}
function Ie(e, t = !0) {
  var r = !1;
  (t || (e.f & Yi) !== 0) && e.nodes !== null && e.nodes.end !== null && (Uo(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), de(e, us), Xa(e, t && !r), mn(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const i of n)
      i.stop();
  ai(e), e.f ^= us, e.f |= Ct;
  var s = e.parent;
  s !== null && s.first !== null && si(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function Uo(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Tn(e);
    e.remove(), e = r;
  }
}
function si(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function kr(e, t, r = !0) {
  var n = [];
  ii(e, n, !0);
  var s = () => {
    r && Ie(e), t && t();
  }, i = n.length;
  if (i > 0) {
    var d = () => --i || s();
    for (var l of n)
      l.out(d);
  } else
    s();
}
function ii(e, t, r) {
  if ((e.f & De) === 0) {
    e.f ^= De;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const l of n)
        (l.is_global || r) && t.push(l);
    for (var s = e.first; s !== null; ) {
      var i = s.next;
      if ((s.f & lr) === 0) {
        var d = (s.f & Gr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (s.f & Mt) !== 0 && (e.f & wt) !== 0;
        ii(s, t, d ? r : !1);
      }
      s = i;
    }
  }
}
function es(e) {
  oi(e, !0);
}
function oi(e, t) {
  if ((e.f & De) !== 0) {
    e.f ^= De, (e.f & ce) === 0 && (de(e, we), Mr.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, s = (r.f & Gr) !== 0 || (r.f & Mt) !== 0;
      oi(r, s ? t : !1), r = n;
    }
    var i = e.nodes && e.nodes.t;
    if (i !== null)
      for (const d of i)
        (d.is_global || t) && d.in();
  }
}
function ts(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var s = r === n ? null : /* @__PURE__ */ Tn(r);
      t.append(r), r = s;
    }
}
let Wn = !1, dr = !1;
function gs(e) {
  dr = e;
}
let z = null, Et = !1;
function ct(e) {
  z = e;
}
let V = null;
function Ot(e) {
  V = e;
}
let ft = null;
function li(e) {
  z !== null && (ft === null ? ft = [e] : ft.push(e));
}
let qe = null, Je = 0, st = null;
function Yo(e) {
  st = e;
}
let di = 1, pr = 0, Er = pr;
function _s(e) {
  Er = e;
}
function ui() {
  return ++di;
}
function An(e) {
  var t = e.f;
  if ((t & we) !== 0)
    return !0;
  if (t & ke && (e.f &= ~Cr), (t & Ft) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, s = 0; s < n; s++) {
      var i = r[s];
      if (An(
        /** @type {Derived} */
        i
      ) && Us(
        /** @type {Derived} */
        i
      ), i.wv > e.wv)
        return !0;
    }
    (t & ut) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    kt === null && de(e, ce);
  }
  return !1;
}
function fi(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(ft !== null && Yr.call(ft, e)))
    for (var s = 0; s < n.length; s++) {
      var i = n[s];
      (i.f & ke) !== 0 ? fi(
        /** @type {Derived} */
        i,
        t,
        !1
      ) : t === i && (r ? de(i, we) : (i.f & ce) !== 0 && de(i, Ft), Ga(
        /** @type {Effect} */
        i
      ));
    }
}
function vi(e) {
  var W;
  var t = qe, r = Je, n = st, s = z, i = ft, d = vt, l = Et, f = Er, u = e.f;
  qe = /** @type {null | Value[]} */
  null, Je = 0, st = null, z = (u & (Mt | lr)) === 0 ? e : null, ft = null, Wr(e.ctx), Et = !1, Er = ++pr, e.ac !== null && (Ja(() => {
    e.ac.abort(aa);
  }), e.ac = null);
  try {
    e.f |= Jn;
    var b = (
      /** @type {Function} */
      e.fn
    ), h = b();
    e.f |= Tr;
    var _ = e.deps, k = R?.is_fork;
    if (qe !== null) {
      var g;
      if (k || mn(e, Je), _ !== null && Je > 0)
        for (_.length = Je + qe.length, g = 0; g < qe.length; g++)
          _[Je + g] = qe[g];
      else
        e.deps = _ = qe;
      if (Za() && (e.f & ut) !== 0)
        for (g = Je; g < _.length; g++)
          ((W = _[g]).reactions ?? (W.reactions = [])).push(e);
    } else !k && _ !== null && Je < _.length && (mn(e, Je), _.length = Je);
    if (Rs() && st !== null && !Et && _ !== null && (e.f & (ke | Ft | we)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      st.length; g++)
        fi(
          st[g],
          /** @type {Effect} */
          e
        );
    if (s !== null && s !== e) {
      if (pr++, s.deps !== null)
        for (let O = 0; O < r; O += 1)
          s.deps[O].rv = pr;
      if (t !== null)
        for (const O of t)
          O.rv = pr;
      st !== null && (n === null ? n = st : n.push(.../** @type {Source[]} */
      st));
    }
    return (e.f & or) !== 0 && (e.f ^= or), h;
  } catch (O) {
    return Ds(O);
  } finally {
    e.f ^= Jn, qe = t, Je = r, st = n, z = s, ft = i, Wr(d), Et = l, Er = f;
  }
}
function $o(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Oi.call(r, e);
    if (n !== -1) {
      var s = r.length - 1;
      s === 0 ? r = t.reactions = null : (r[n] = r[s], r.pop());
    }
  }
  if (r === null && (t.f & ke) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (qe === null || !Yr.call(qe, t))) {
    var i = (
      /** @type {Derived} */
      t
    );
    (i.f & ut) !== 0 && (i.f ^= ut, i.f &= ~Cr), i.v !== ge && Ya(i), Lo(i), mn(i, 0);
  }
}
function mn(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      $o(e, r[n]);
}
function Jr(e) {
  var t = e.f;
  if ((t & Ct) === 0) {
    de(e, ce);
    var r = V, n = Wn;
    V = e, Wn = !0;
    try {
      (t & (wt | Ms)) !== 0 ? Io(e) : Xa(e), ai(e);
      var s = vi(e);
      e.teardown = typeof s == "function" ? s : null, e.wv = di;
      var i;
    } finally {
      Wn = n, V = r;
    }
  }
}
async function Go() {
  await Promise.resolve(), go();
}
function a(e) {
  var t = e.f, r = (t & ke) !== 0;
  if (z !== null && !Et) {
    var n = V !== null && (V.f & Ct) !== 0;
    if (!n && (ft === null || !Yr.call(ft, e))) {
      var s = z.deps;
      if ((z.f & Jn) !== 0)
        e.rv < pr && (e.rv = pr, qe === null && s !== null && s[Je] === e ? Je++ : qe === null ? qe = [e] : qe.push(e));
      else {
        (z.deps ?? (z.deps = [])).push(e);
        var i = e.reactions;
        i === null ? e.reactions = [z] : Yr.call(i, z) || i.push(z);
      }
    }
  }
  if (dr && wr.has(e))
    return wr.get(e);
  if (r) {
    var d = (
      /** @type {Derived} */
      e
    );
    if (dr) {
      var l = d.v;
      return ((d.f & ce) === 0 && d.reactions !== null || hi(d)) && (l = Ka(d)), wr.set(d, l), l;
    }
    var f = (d.f & ut) === 0 && !Et && z !== null && (Wn || (z.f & ut) !== 0), u = (d.f & Tr) === 0;
    An(d) && (f && (d.f |= ut), Us(d)), f && !u && (Ys(d), ci(d));
  }
  if (kt?.has(e))
    return kt.get(e);
  if ((e.f & or) !== 0)
    throw e.v;
  return e.v;
}
function ci(e) {
  if (e.f |= ut, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & ke) !== 0 && (t.f & ut) === 0 && (Ys(
        /** @type {Derived} */
        t
      ), ci(
        /** @type {Derived} */
        t
      ));
}
function hi(e) {
  if (e.v === ge) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (wr.has(t) || (t.f & ke) !== 0 && hi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function pi(e) {
  var t = Et;
  try {
    return Et = !0, e();
  } finally {
    Et = t;
  }
}
const Wo = ["touchstart", "touchmove"];
function Ko(e) {
  return Wo.includes(e);
}
const gr = Symbol("events"), gi = /* @__PURE__ */ new Set(), Ha = /* @__PURE__ */ new Set();
function J(e, t, r) {
  (t[gr] ?? (t[gr] = {}))[e] = r;
}
function Jo(e) {
  for (var t = 0; t < e.length; t++)
    gi.add(e[t]);
  for (var r of Ha)
    r(e);
}
let xs = null;
function bs(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, s = e.composedPath?.() || [], i = (
    /** @type {null | Element} */
    s[0] || e.target
  );
  xs = e;
  var d = 0, l = xs === e && e[gr];
  if (l) {
    var f = s.indexOf(l);
    if (f !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[gr] = t;
      return;
    }
    var u = s.indexOf(t);
    if (u === -1)
      return;
    f <= u && (d = f);
  }
  if (i = /** @type {Element} */
  s[d] || e.target, i !== t) {
    zi(e, "currentTarget", {
      configurable: !0,
      get() {
        return i || r;
      }
    });
    var b = z, h = V;
    ct(null), Ot(null);
    try {
      for (var _, k = []; i !== null; ) {
        var g = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var W = i[gr]?.[n];
          W != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === i) && W.call(i, e);
        } catch (O) {
          _ ? k.push(O) : _ = O;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        i = g;
      }
      if (_) {
        for (let O of k)
          queueMicrotask(() => {
            throw O;
          });
        throw _;
      }
    } finally {
      e[gr] = t, delete e.currentTarget, ct(b), Ot(h);
    }
  }
}
const Zo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function Qo(e) {
  return (
    /** @type {string} */
    Zo?.createHTML(e) ?? e
  );
}
function _i(e) {
  var t = Qs("template");
  return t.innerHTML = Qo(e.replaceAll("<!>", "<!---->")), t.content;
}
function Zr(e, t) {
  var r = (
    /** @type {Effect} */
    V
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function y(e, t) {
  var r = (t & Ss) !== 0, n = (t & io) !== 0, s, i = !e.startsWith("<!>");
  return () => {
    s === void 0 && (s = _i(i ? e : "<!>" + e), r || (s = /** @type {TemplateNode} */
    /* @__PURE__ */ Gt(s)));
    var d = (
      /** @type {TemplateNode} */
      n || Ws ? document.importNode(s, !0) : s.cloneNode(!0)
    );
    if (r) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gt(d)
      ), f = (
        /** @type {TemplateNode} */
        d.lastChild
      );
      Zr(l, f);
    } else
      Zr(d, d);
    return d;
  };
}
// @__NO_SIDE_EFFECTS__
function Xo(e, t, r = "svg") {
  var n = !e.startsWith("<!>"), s = (t & Ss) !== 0, i = `<${r}>${n ? e : "<!>" + e}</${r}>`, d;
  return () => {
    if (!d) {
      var l = (
        /** @type {DocumentFragment} */
        _i(i)
      ), f = (
        /** @type {Element} */
        /* @__PURE__ */ Gt(l)
      );
      if (s)
        for (d = document.createDocumentFragment(); /* @__PURE__ */ Gt(f); )
          d.appendChild(
            /** @type {TemplateNode} */
            /* @__PURE__ */ Gt(f)
          );
      else
        d = /** @type {Element} */
        /* @__PURE__ */ Gt(f);
    }
    var u = (
      /** @type {TemplateNode} */
      d.cloneNode(!0)
    );
    if (s) {
      var b = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Gt(u)
      ), h = (
        /** @type {TemplateNode} */
        u.lastChild
      );
      Zr(b, h);
    } else
      Zr(u, u);
    return u;
  };
}
// @__NO_SIDE_EFFECTS__
function Te(e, t) {
  return /* @__PURE__ */ Xo(e, t, "svg");
}
function el(e = "") {
  {
    var t = Kt(e + "");
    return Zr(t, t), t;
  }
}
function tl() {
  var e = document.createDocumentFragment(), t = document.createComment(""), r = Kt();
  return e.append(t, r), Zr(t, r), e;
}
function x(e, t) {
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
function rl(e, t) {
  return nl(e, t);
}
const Vn = /* @__PURE__ */ new Map();
function nl(e, { target: t, anchor: r, props: n = {}, events: s, context: i, intro: d = !0, transformError: l }) {
  Do();
  var f = void 0, u = Vo(() => {
    var b = r ?? t.appendChild(Kt());
    yo(
      /** @type {TemplateNode} */
      b,
      {
        pending: () => {
        }
      },
      (k) => {
        js({});
        var g = (
          /** @type {ComponentContext} */
          vt
        );
        i && (g.c = i), s && (n.$$events = s), f = e(k, n) || {}, Ns();
      },
      l
    );
    var h = /* @__PURE__ */ new Set(), _ = (k) => {
      for (var g = 0; g < k.length; g++) {
        var W = k[g];
        if (!h.has(W)) {
          h.add(W);
          var O = Ko(W);
          for (const Pe of [t, document]) {
            var B = Vn.get(Pe);
            B === void 0 && (B = /* @__PURE__ */ new Map(), Vn.set(Pe, B));
            var m = B.get(W);
            m === void 0 ? (Pe.addEventListener(W, bs, { passive: O }), B.set(W, 1)) : B.set(W, m + 1);
          }
        }
      }
    };
    return _(ra(gi)), Ha.add(_), () => {
      for (var k of h)
        for (const O of [t, document]) {
          var g = (
            /** @type {Map<string, number>} */
            Vn.get(O)
          ), W = (
            /** @type {number} */
            g.get(k)
          );
          --W == 0 ? (O.removeEventListener(k, bs), g.delete(k), g.size === 0 && Vn.delete(O)) : g.set(k, W);
        }
      Ha.delete(_), b !== r && b.parentNode?.removeChild(b);
    };
  });
  return Va.set(f, u), f;
}
let Va = /* @__PURE__ */ new WeakMap();
function al(e, t) {
  const r = Va.get(e);
  return r ? (Va.delete(e), r(t)) : Promise.resolve();
}
var mt, Pt, Xe, mr, Mn, Sn, ta;
class sl {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    ze(this, "anchor");
    /** @type {Map<Batch, Key>} */
    N(this, mt, /* @__PURE__ */ new Map());
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
    N(this, Pt, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    N(this, Xe, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    N(this, mr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    N(this, Mn, !0);
    /**
     * @param {Batch} batch
     */
    N(this, Sn, (t) => {
      if (o(this, mt).has(t)) {
        var r = (
          /** @type {Key} */
          o(this, mt).get(t)
        ), n = o(this, Pt).get(r);
        if (n)
          es(n), o(this, mr).delete(r);
        else {
          var s = o(this, Xe).get(r);
          s && (o(this, Pt).set(r, s.effect), o(this, Xe).delete(r), s.fragment.lastChild.remove(), this.anchor.before(s.fragment), n = s.effect);
        }
        for (const [i, d] of o(this, mt)) {
          if (o(this, mt).delete(i), i === t)
            break;
          const l = o(this, Xe).get(d);
          l && (Ie(l.effect), o(this, Xe).delete(d));
        }
        for (const [i, d] of o(this, Pt)) {
          if (i === r || o(this, mr).has(i)) continue;
          const l = () => {
            if (Array.from(o(this, mt).values()).includes(i)) {
              var u = document.createDocumentFragment();
              ts(d, u), u.append(Kt()), o(this, Xe).set(i, { effect: d, fragment: u });
            } else
              Ie(d);
            o(this, mr).delete(i), o(this, Pt).delete(i);
          };
          o(this, Mn) || !n ? (o(this, mr).add(i), kr(d, l, !1)) : l();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    N(this, ta, (t) => {
      o(this, mt).delete(t);
      const r = Array.from(o(this, mt).values());
      for (const [n, s] of o(this, Xe))
        r.includes(n) || (Ie(s.effect), o(this, Xe).delete(n));
    });
    this.anchor = t, L(this, Mn, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      R
    ), s = Zs();
    if (r && !o(this, Pt).has(t) && !o(this, Xe).has(t))
      if (s) {
        var i = document.createDocumentFragment(), d = Kt();
        i.append(d), o(this, Xe).set(t, {
          effect: dt(() => r(d)),
          fragment: i
        });
      } else
        o(this, Pt).set(
          t,
          dt(() => r(this.anchor))
        );
    if (o(this, mt).set(n, t), s) {
      for (const [l, f] of o(this, Pt))
        l === t ? n.unskip_effect(f) : n.skip_effect(f);
      for (const [l, f] of o(this, Xe))
        l === t ? n.unskip_effect(f.effect) : n.skip_effect(f.effect);
      n.oncommit(o(this, Sn)), n.ondiscard(o(this, ta));
    } else
      o(this, Sn).call(this, n);
  }
}
mt = new WeakMap(), Pt = new WeakMap(), Xe = new WeakMap(), mr = new WeakMap(), Mn = new WeakMap(), Sn = new WeakMap(), ta = new WeakMap();
function E(e, t, r = !1) {
  var n = new sl(e), s = r ? Gr : 0;
  function i(d, l) {
    n.ensure(d, l);
  }
  Qa(() => {
    var d = !1;
    t((l, f = 0) => {
      d = !0, i(f, l);
    }), d || i(-1, null);
  }, s);
}
function Ca(e, t) {
  return t;
}
function il(e, t, r) {
  for (var n = [], s = t.length, i, d = t.length, l = 0; l < s; l++) {
    let h = t[l];
    kr(
      h,
      () => {
        if (i) {
          if (i.pending.delete(h), i.done.add(h), i.pending.size === 0) {
            var _ = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            qa(e, ra(i.done)), _.delete(i), _.size === 0 && (e.outrogroups = null);
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
      ), b = (
        /** @type {Element} */
        u.parentNode
      );
      Po(b), b.append(u), e.items.clear();
    }
    qa(e, t, !f);
  } else
    i = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(i);
}
function qa(e, t, r = !0) {
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
  for (var s = 0; s < t.length; s++) {
    var i = t[s];
    if (n?.has(i)) {
      i.f |= Wt;
      const d = document.createDocumentFragment();
      ts(i, d);
    } else
      Ie(t[s], r);
  }
}
var ys;
function Rr(e, t, r, n, s, i = null) {
  var d = e, l = /* @__PURE__ */ new Map();
  {
    var f = (
      /** @type {Element} */
      e
    );
    d = f.appendChild(Kt());
  }
  var u = null, b = /* @__PURE__ */ To(() => {
    var m = r();
    return Ua(m) ? m : m == null ? [] : ra(m);
  }), h, _ = /* @__PURE__ */ new Map(), k = !0;
  function g(m) {
    (B.effect.f & Ct) === 0 && (B.pending.delete(m), B.fallback = u, ol(B, h, d, t, n), u !== null && (h.length === 0 ? (u.f & Wt) === 0 ? es(u) : (u.f ^= Wt, pn(u, null, d)) : kr(u, () => {
      u = null;
    })));
  }
  function W(m) {
    B.pending.delete(m);
  }
  var O = Qa(() => {
    h = /** @type {V[]} */
    a(b);
    for (var m = h.length, Pe = /* @__PURE__ */ new Set(), Ae = (
      /** @type {Batch} */
      R
    ), Fe = Zs(), Ee = 0; Ee < m; Ee += 1) {
      var zt = h[Ee], Le = n(zt, Ee), _e = k ? null : l.get(Le);
      _e ? (_e.v && Kr(_e.v, zt), _e.i && Kr(_e.i, Ee), Fe && Ae.unskip_effect(_e.e)) : (_e = ll(
        l,
        k ? d : ys ?? (ys = Kt()),
        zt,
        Le,
        Ee,
        s,
        t,
        r
      ), k || (_e.e.f |= Wt), l.set(Le, _e)), Pe.add(Le);
    }
    if (m === 0 && i && !u && (k ? u = dt(() => i(d)) : (u = dt(() => i(ys ?? (ys = Kt()))), u.f |= Wt)), m > Pe.size && Wi(), !k)
      if (_.set(Ae, Pe), Fe) {
        for (const [et, ur] of l)
          Pe.has(et) || Ae.skip_effect(ur.e);
        Ae.oncommit(g), Ae.ondiscard(W);
      } else
        g(Ae);
    a(b);
  }), B = { effect: O, items: l, pending: _, outrogroups: null, fallback: u };
  k = !1;
}
function vn(e) {
  for (; e !== null && (e.f & Mt) === 0; )
    e = e.next;
  return e;
}
function ol(e, t, r, n, s) {
  var i = t.length, d = e.items, l = vn(e.effect.first), f, u = null, b = [], h = [], _, k, g, W;
  for (W = 0; W < i; W += 1) {
    if (_ = t[W], k = s(_, W), g = /** @type {EachItem} */
    d.get(k).e, e.outrogroups !== null)
      for (const Le of e.outrogroups)
        Le.pending.delete(g), Le.done.delete(g);
    if ((g.f & De) !== 0 && es(g), (g.f & Wt) !== 0)
      if (g.f ^= Wt, g === l)
        pn(g, null, r);
      else {
        var O = u ? u.next : l;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), rr(e, u, g), rr(e, g, O), pn(g, O, r), u = g, b = [], h = [], l = vn(u.next);
        continue;
      }
    if (g !== l) {
      if (f !== void 0 && f.has(g)) {
        if (b.length < h.length) {
          var B = h[0], m;
          u = B.prev;
          var Pe = b[0], Ae = b[b.length - 1];
          for (m = 0; m < b.length; m += 1)
            pn(b[m], B, r);
          for (m = 0; m < h.length; m += 1)
            f.delete(h[m]);
          rr(e, Pe.prev, Ae.next), rr(e, u, Pe), rr(e, Ae, B), l = B, u = Ae, W -= 1, b = [], h = [];
        } else
          f.delete(g), pn(g, l, r), rr(e, g.prev, g.next), rr(e, g, u === null ? e.effect.first : u.next), rr(e, u, g), u = g;
        continue;
      }
      for (b = [], h = []; l !== null && l !== g; )
        (f ?? (f = /* @__PURE__ */ new Set())).add(l), h.push(l), l = vn(l.next);
      if (l === null)
        continue;
    }
    (g.f & Wt) === 0 && b.push(g), u = g, l = vn(g.next);
  }
  if (e.outrogroups !== null) {
    for (const Le of e.outrogroups)
      Le.pending.size === 0 && (qa(e, ra(Le.done)), e.outrogroups?.delete(Le));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (l !== null || f !== void 0) {
    var Fe = [];
    if (f !== void 0)
      for (g of f)
        (g.f & De) === 0 && Fe.push(g);
    for (; l !== null; )
      (l.f & De) === 0 && l !== e.fallback && Fe.push(l), l = vn(l.next);
    var Ee = Fe.length;
    if (Ee > 0) {
      var zt = i === 0 ? r : null;
      il(e, Fe, zt);
    }
  }
}
function ll(e, t, r, n, s, i, d, l) {
  var f = (d & no) !== 0 ? (d & so) === 0 ? /* @__PURE__ */ jo(r, !1, !1) : Sr(r) : null, u = (d & ao) !== 0 ? Sr(s) : null;
  return {
    v: f,
    i: u,
    e: dt(() => (i(t, f ?? r, u ?? s, l), () => {
      e.delete(n);
    }))
  };
}
function pn(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, s = e.nodes.end, i = t && (t.f & Wt) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Tn(n)
      );
      if (i.before(n), n === s)
        return;
      n = d;
    }
}
function rr(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function dl(e, t) {
  ri(() => {
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
      const s = Qs("style");
      s.id = t.hash, s.textContent = t.code, n.appendChild(s);
    }
  });
}
function xi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var s = e.length;
    for (t = 0; t < s; t++) e[t] && (r = xi(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function ul() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++) (e = arguments[r]) && (t = xi(e)) && (n && (n += " "), n += t);
  return n;
}
function ms(e) {
  return typeof e == "object" ? ul(e) : e ?? "";
}
function fl(e, t, r) {
  var n = e == null ? "" : "" + e;
  return t && (n = n ? n + " " + t : t), n === "" ? null : n;
}
function vl(e, t) {
  return e == null ? null : String(e);
}
function me(e, t, r, n, s, i) {
  var d = (
    /** @type {any} */
    e[La]
  );
  if (d !== r || d === void 0) {
    var l = fl(r, n);
    l == null ? e.removeAttribute("class") : t ? e.className = l : e.setAttribute("class", l), e[La] = r;
  }
  return i;
}
function cl(e, t, r, n) {
  var s = (
    /** @type {any} */
    e[ja]
  );
  if (s !== t) {
    var i = vl(t);
    i == null ? e.removeAttribute("style") : e.style.cssText = i, e[ja] = t;
  }
  return n;
}
function bi(e, t, r = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!Ua(t))
      return lo();
    for (var n of e.options)
      n.selected = t.includes(yn(n));
    return;
  }
  for (n of e.options) {
    var s = yn(n);
    if (Bo(s, t)) {
      n.selected = !0;
      return;
    }
  }
  (!r || t !== void 0) && (e.selectedIndex = -1);
}
function hl(e) {
  var t = new MutationObserver(() => {
    bi(e, e.__value);
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
  }), ei(() => {
    t.disconnect();
  });
}
function pl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet(), s = !0;
  Xs(e, "change", (i) => {
    var d = i ? "[selected]" : ":checked", l;
    if (e.multiple)
      l = [].map.call(e.querySelectorAll(d), yn);
    else {
      var f = e.querySelector(d) ?? // will fall back to first non-disabled option if no option is selected
      e.querySelector("option:not([disabled])");
      l = f && yn(f);
    }
    r(l), e.__value = l, R !== null && n.add(R);
  }), ri(() => {
    var i = t();
    if (e === document.activeElement) {
      var d = (
        /** @type {Batch} */
        R
      );
      if (n.has(d))
        return;
    }
    if (bi(e, i, s), s && i === void 0) {
      var l = e.querySelector(":checked");
      l !== null && (i = yn(l), r(i));
    }
    e.__value = i, s = !1;
  }), hl(e);
}
function yn(e) {
  return "__value" in e ? e.__value : e.value;
}
const gl = Symbol("is custom element"), _l = Symbol("is html");
function Ma(e, t, r, n) {
  var s = xl(e);
  s[t] !== (s[t] = r) && (r == null ? e.removeAttribute(t) : typeof r != "string" && bl(e).includes(t) ? e[t] = r : e.setAttribute(t, r));
}
function xl(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    /** @type {any} */
    e[qn] ?? (e[qn] = {
      [gl]: e.nodeName.includes("-"),
      [_l]: e.namespaceURI === Ts
    })
  );
}
var ws = /* @__PURE__ */ new Map();
function bl(e) {
  var t = e.getAttribute("is") || e.nodeName, r = ws.get(t);
  if (r) return r;
  ws.set(t, r = []);
  for (var n, s = e, i = Element.prototype; i !== s; ) {
    n = Hi(s);
    for (var d in n)
      n[d].set && // better safe than sorry, we don't want spread attributes to mess with HTML content
      d !== "innerHTML" && d !== "textContent" && d !== "innerText" && r.push(d);
    s = Es(s);
  }
  return r;
}
function yl(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  Xs(e, "input", async (s) => {
    var i = s ? e.defaultValue : e.value;
    if (i = Sa(e) ? Ta(i) : i, r(i), R !== null && n.add(R), await Go(), i !== (i = t())) {
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
  pi(t) == null && e.value && (r(Sa(e) ? Ta(e.value) : e.value), R !== null && n.add(R)), ni(() => {
    var s = t();
    if (e === document.activeElement) {
      var i = (
        /** @type {Batch} */
        R
      );
      if (n.has(i))
        return;
    }
    Sa(e) && s === Ta(e.value) || e.type === "date" && !s && !e.value || s !== e.value && (e.value = s ?? "");
  });
}
function Sa(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Ta(e) {
  return e === "" ? null : +e;
}
const ml = "5";
var ks;
typeof window < "u" && ((ks = window.__svelte ?? (window.__svelte = {})).v ?? (ks.v = /* @__PURE__ */ new Set())).add(ml);
var wl = /* @__PURE__ */ Te('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), kl = /* @__PURE__ */ Te('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), El = /* @__PURE__ */ Te('<svg class="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'), Cl = /* @__PURE__ */ y("<div><!> </div>"), Ml = /* @__PURE__ */ y('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2" style="min-width:300px"></div>'), Sl = /* @__PURE__ */ y('<p class="text-sm text-gray-500 dark:text-gray-400 mt-0.5"> </p>'), Tl = /* @__PURE__ */ y('<div class="fixed inset-0 z-50 flex items-center justify-center p-4"><div class="absolute inset-0 bg-black/50 backdrop-blur-sm" role="button" tabindex="-1" aria-label="Close modal"></div> <div class="relative bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-2xl w-full max-w-4xl max-h-[85vh] flex flex-col"><div class="flex items-center justify-between px-6 py-4 border-b border-gray-100 dark:border-gray-700"><div><h3 class="text-lg font-semibold text-gray-900 dark:text-white"> </h3> <!></div> <button aria-label="Close" class="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div> <div class="flex-1 overflow-auto p-6"><pre class="text-sm font-mono bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto whitespace-pre-wrap"> </pre></div></div></div>'), Al = /* @__PURE__ */ y('<div class="flex justify-center py-16"><svg class="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), Ll = /* @__PURE__ */ y("<span> </span>"), jl = /* @__PURE__ */ Te('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Stopping...', 1), Nl = /* @__PURE__ */ Te('<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" rx="1"></rect></svg> Stop', 1), Rl = /* @__PURE__ */ y('<button class="px-4 py-2 bg-orange-600 hover:bg-orange-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!></button>'), Bl = /* @__PURE__ */ Te('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Starting...', 1), Dl = /* @__PURE__ */ Te('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg> Run Now', 1), Pl = /* @__PURE__ */ y('<button class="px-4 py-2 bg-green-600 hover:bg-green-700 disabled:opacity-50 text-white text-sm font-medium rounded-lg flex items-center gap-2"><!></button>'), Fl = /* @__PURE__ */ Te('<svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Ol = /* @__PURE__ */ Te('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), zl = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"> </span>'), Hl = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded-full text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"> </span>'), Vl = /* @__PURE__ */ y('<p class="text-sm text-gray-600 dark:text-gray-400"> </p>'), ql = /* @__PURE__ */ y('<div><div class="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1"><span>Step Progress</span> <span> </span></div> <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2"><div class="bg-blue-600 h-2 rounded-full transition-all"></div></div></div>'), Il = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded text-xs bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300">Paused</span>'), Ul = /* @__PURE__ */ y('<span class="text-xs text-gray-400"> </span>'), Yl = /* @__PURE__ */ y('<div class="flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-lg px-4 py-2 text-sm"><div class="flex items-center gap-2"><span> </span> <!> <!></div> <button class="text-xs text-blue-600 dark:text-blue-400 hover:underline"> </button></div>'), $l = /* @__PURE__ */ y('<div><h3 class="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Schedules</h3> <div class="space-y-2"></div></div>'), Gl = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><div class="p-6 space-y-4"><!> <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm"><div><span class="block text-gray-500 dark:text-gray-400">Started At</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Stopped At</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Executions</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div> <div><span class="block text-gray-500 dark:text-gray-400">Progress</span> <span class="font-medium text-gray-900 dark:text-white"> </span></div></div> <!> <!></div></div>'), Wl = /* @__PURE__ */ y('<div class="p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400">No steps defined for this task</p></div>'), Kl = /* @__PURE__ */ Te('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>'), Jl = /* @__PURE__ */ Te('<svg class="animate-spin w-4 h-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Zl = /* @__PURE__ */ Te('<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>'), Ql = /* @__PURE__ */ y('<span class="px-1.5 py-0.5 rounded text-xs bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-400">async</span>'), Xl = /* @__PURE__ */ y('<span class="text-xs text-gray-400 dark:text-gray-500"> </span>'), ed = /* @__PURE__ */ y('<div class="mt-1.5 flex items-center gap-2"><svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> <span class="text-xs text-gray-500 dark:text-gray-400 font-mono"> </span> <!></div>'), td = /* @__PURE__ */ y('<p class="text-xs text-gray-400 mt-1"> </p>'), rd = /* @__PURE__ */ y('<button class="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-indigo-700 dark:text-indigo-400 border border-indigo-300 dark:border-indigo-700 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/30 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg> View Code</button>'), nd = /* @__PURE__ */ y('<div class="p-4"><div class="flex items-start justify-between gap-3"><div class="flex items-start gap-3"><div><!></div> <div><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-900 dark:text-white"></span> <span> </span> <!></div> <!> <!></div></div> <!></div></div>'), ad = /* @__PURE__ */ y('<div class="divide-y divide-gray-100 dark:divide-gray-700"></div>'), sd = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><!></div>'), id = /* @__PURE__ */ y('<div class="p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> <p class="text-gray-500 dark:text-gray-400">No executions recorded yet</p></div>'), od = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/40 flex items-center justify-center"><svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg></div>'), ld = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center"><svg class="animate-spin w-4 h-4 text-blue-600 dark:text-blue-400" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), dd = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/40 flex items-center justify-center"><svg class="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>'), ud = /* @__PURE__ */ y('<div class="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center"><svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>'), fd = /* @__PURE__ */ y('<span class="truncate max-w-xs"> </span>'), vd = /* @__PURE__ */ y('<div class="mb-3"><span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Result</span> <p class="mt-1 text-sm text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-900 rounded-lg p-3 font-mono whitespace-pre-wrap break-words"> </p></div>'), cd = /* @__PURE__ */ y('<div class="mt-2 flex items-center gap-2 text-sm text-gray-500"><svg class="animate-spin h-4 w-4" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg> Loading logs...</div>'), hd = /* @__PURE__ */ y('<pre class="mt-2 text-xs font-mono bg-gray-900 text-gray-100 rounded-lg p-3 overflow-x-auto max-h-64 overflow-y-auto whitespace-pre-wrap"> </pre>'), pd = /* @__PURE__ */ y('<p class="mt-2 text-sm text-gray-400">No logs available for this execution</p>'), gd = /* @__PURE__ */ y('<div class="px-5 pb-4 pl-16"><!> <div><span class="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Logs</span> <!></div></div>'), _d = /* @__PURE__ */ y('<div><button class="w-full px-5 py-4 flex items-center gap-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors text-left"><div class="flex-shrink-0"><!></div> <div class="flex-1 min-w-0"><div class="flex items-center gap-2"><span class="text-sm font-medium text-gray-900 dark:text-white truncate"> </span> <span> </span></div> <div class="flex items-center gap-3 mt-0.5 text-xs text-gray-500 dark:text-gray-400"><span> </span> <!></div></div> <div class="flex-shrink-0"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></div></button> <!></div>'), xd = /* @__PURE__ */ y('<div class="px-5 py-3 border-t border-gray-100 dark:border-gray-700 text-center"><button class="text-sm text-blue-600 dark:text-blue-400 hover:underline">Load more executions...</button></div>'), bd = /* @__PURE__ */ y('<div class="divide-y divide-gray-100 dark:divide-gray-700"></div> <!>', 1), yd = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden"><!></div>'), md = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden mb-6"><div class="p-6 border-b border-gray-100 dark:border-gray-700"><div class="flex items-start justify-between gap-4"><div><h2 class="text-xl font-bold text-gray-900 dark:text-white"> </h2> <p class="text-xs text-gray-400 mt-1 font-mono"> </p></div> <!></div></div> <div class="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-b border-gray-100 dark:border-gray-700 flex gap-3"><!> <button class="px-4 py-2 bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-medium rounded-lg flex items-center gap-2"><!> Delete</button></div></div> <div class="mb-6 border-b border-gray-200 dark:border-gray-700"><nav class="flex gap-6" aria-label="Tabs"><button>Overview</button> <button>Steps <!></button> <button>Executions <!></button></nav></div> <!>', 1), wd = /* @__PURE__ */ y('<div class="mb-4"><button class="inline-flex items-center gap-1.5 text-sm text-blue-600 dark:text-blue-400 hover:underline"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to tasks</button></div> <!>', 1), kd = /* @__PURE__ */ y('<div class="mb-4 p-4 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg flex items-center gap-2 text-sm"><svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg> </div>'), Ed = /* @__PURE__ */ y('<div class="flex justify-center items-center py-16"><svg class="animate-spin h-10 w-10 text-blue-600" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg></div>'), Cd = /* @__PURE__ */ y('<span class="relative flex h-2 w-2"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span></span>'), Md = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-12 text-center"><svg class="w-12 h-12 mx-auto text-gray-300 dark:text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg> <p class="text-gray-500 dark:text-gray-400"> </p></div>'), Sd = /* @__PURE__ */ y('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), Td = /* @__PURE__ */ y('<p class="text-sm text-gray-600 dark:text-gray-400 line-clamp-2 svelte-11d5b98"> </p>'), Ad = /* @__PURE__ */ y('<span class="text-xs text-gray-500"> </span>'), Ld = /* @__PURE__ */ y('<div class="flex items-center gap-1.5 text-gray-600 dark:text-gray-400"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span></div> <!>', 1), jd = /* @__PURE__ */ y('<span class="text-xs text-gray-500">One-time task</span>'), Nd = /* @__PURE__ */ Te('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Rd = /* @__PURE__ */ Te('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>'), Bd = /* @__PURE__ */ y('<button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors"><!> Run</button>'), Dd = /* @__PURE__ */ y("<button> </button>"), Pd = /* @__PURE__ */ Te('<svg class="animate-spin h-3.5 w-3.5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path></svg>'), Fd = /* @__PURE__ */ Te('<svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>'), Od = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow duration-200 flex flex-col"><div class="p-4 border-b border-gray-100 dark:border-gray-700"><div class="flex justify-between items-start gap-2"><div class="flex-1 min-w-0"><h3 class="font-semibold text-gray-900 dark:text-white truncate"> </h3> <p class="text-xs text-gray-400 dark:text-gray-500 mt-0.5"> </p></div> <div class="flex items-center gap-2"><!> <span> </span></div></div></div> <div class="p-4 space-y-3 flex-1"><!> <div class="flex flex-wrap gap-3 text-sm"><!> <button class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 hover:underline text-xs"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> </button></div></div> <div class="px-4 py-3 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700 rounded-b-xl flex gap-2"><button class="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg> View</button> <!> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><!></button></div></div>'), zd = /* @__PURE__ */ y('<div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4"></div>'), Hd = /* @__PURE__ */ y('<span class="relative flex h-2.5 w-2.5"><span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span> <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-500"></span></span>'), Vd = /* @__PURE__ */ y("<span> </span>"), qd = /* @__PURE__ */ y("<span> </span> <!>", 1), Id = /* @__PURE__ */ y('<button class="px-3 py-1.5 text-xs font-medium text-white bg-green-600 hover:bg-green-700 disabled:opacity-50 rounded-lg transition-colors">Run</button>'), Ud = /* @__PURE__ */ y("<button> </button>"), Yd = /* @__PURE__ */ y('<div class="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"><div class="flex-shrink-0 flex items-center gap-2"><!> <span> </span></div> <div class="flex-1 min-w-0"><h3 class="text-sm font-medium text-gray-900 dark:text-white truncate"> </h3> <div class="flex items-center gap-3 mt-0.5 text-xs text-gray-500 dark:text-gray-400"><!> <span> </span></div></div> <div class="flex items-center gap-2 flex-shrink-0"><button class="px-3 py-1.5 text-xs font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors">View</button> <!> <!> <button class="px-3 py-1.5 text-xs font-medium text-red-700 dark:text-red-400 border border-red-300 dark:border-red-700 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/30 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"><svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div>'), $d = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden divide-y divide-gray-100 dark:divide-gray-700"></div>'), Gd = /* @__PURE__ */ y('<!> <div class="flex items-center justify-between mt-6"><button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Previous</button> <span class="text-xs text-gray-500 dark:text-gray-400"> </span> <button class="text-sm px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors">Next</button></div>', 1), Wd = /* @__PURE__ */ y('<div class="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 mb-4"><div class="flex flex-wrap items-center gap-x-4 gap-y-2"><div class="flex items-center gap-4 text-sm"><span class="font-medium text-gray-700 dark:text-gray-300"> </span> <span class="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium"><!> </span> <span class="text-yellow-600 dark:text-yellow-400 font-medium"> </span> <span class="text-green-600 dark:text-green-400 font-medium"> </span> <span class="text-red-600 dark:text-red-400 font-medium"> </span></div> <div class="flex flex-1 items-center gap-2 ml-auto min-w-0"><div class="flex-1 relative min-w-[150px]"><svg class="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg> <input type="text" placeholder="Search tasks..." class="w-full pl-8 pr-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"/></div> <select class="w-36 px-3 py-1.5 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"><option>All Status</option><option>Running</option><option>Pending</option><option>Completed</option><option>Failed</option></select></div></div></div> <!>', 1), Kd = /* @__PURE__ */ y('<div class="mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"><h1 class="text-2xl font-bold text-gray-900 dark:text-white">Task Monitor</h1> <div class="flex items-center gap-2"><div class="inline-flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden"><button aria-label="Grid view"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg></button> <button aria-label="List view"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button></div> <button class="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg> Refresh</button></div></div> <!> <!>', 1), Jd = /* @__PURE__ */ y('<!> <div class="p-6 max-w-7xl mx-auto"><!> <!></div>', 1);
const Zd = {
  hash: "svelte-11d5b98",
  code: ".line-clamp-2.svelte-11d5b98 {display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}"
};
function Qd(e, t) {
  js(t, !0), dl(e, Zd);
  let r = /* @__PURE__ */ K(Ve([])), n = /* @__PURE__ */ K(!0), s = /* @__PURE__ */ K(""), i = /* @__PURE__ */ K(""), d = /* @__PURE__ */ K(""), l = /* @__PURE__ */ K(Ve([])), f = /* @__PURE__ */ K(0), u = Ve({}), b = Ve({});
  const h = 10;
  let _ = /* @__PURE__ */ K(1), k = /* @__PURE__ */ K(0), g = /* @__PURE__ */ K(null), W = /* @__PURE__ */ K(!1), O = /* @__PURE__ */ K(Ve([1])), B = /* @__PURE__ */ K(null), m = /* @__PURE__ */ K(null), Pe = /* @__PURE__ */ K(Ve([])), Ae = /* @__PURE__ */ K(!1), Fe = /* @__PURE__ */ K(null), Ee = /* @__PURE__ */ K(Ve({})), zt = Ve({}), Le = /* @__PURE__ */ K(!1), _e = /* @__PURE__ */ K(null), et = /* @__PURE__ */ K("overview"), ur = /* @__PURE__ */ K("grid"), Ar = /* @__PURE__ */ at(() => ({
    total: a(r).length,
    running: a(r).filter((c) => c.status?.toLowerCase() === "running").length,
    pending: a(r).filter((c) => c.status?.toLowerCase() === "pending").length,
    completed: a(r).filter((c) => c.status?.toLowerCase() === "completed").length,
    failed: a(r).filter((c) => c.status?.toLowerCase() === "failed").length
  })), sa = /* @__PURE__ */ at(() => a(r).filter((c) => {
    const w = !a(i) || c.name.toLowerCase().includes(a(i).toLowerCase()) || jn(c.metadata).toLowerCase().includes(a(i).toLowerCase()), A = !a(d) || c.status?.toLowerCase() === a(d).toLowerCase();
    return w && A;
  }));
  function Zt(c, w = "info") {
    const A = Ro(f);
    T(l, [...a(l), { id: A, message: c, type: w }], !0), setTimeout(
      () => {
        T(l, a(l).filter((j) => j.id !== A), !0);
      },
      4e3
    );
  }
  async function Qt(c, w = {}) {
    return await t.ctx.callSync(c, w);
  }
  async function Ht() {
    try {
      const c = await Qt("get_all_tasks", { from_id: a(_), page_size: h });
      T(r, c?.tasks ?? c?.data?.tasks ?? (Array.isArray(c) ? c : []), !0), T(k, c?.max_id ?? 0, !0), T(g, c?.next_from_id ?? null, !0), T(W, c?.has_more ?? !1, !0), T(s, "");
    } catch (c) {
      T(s, "Error loading tasks: " + (c?.message || String(c)));
    } finally {
      T(n, !1);
    }
  }
  function yi() {
    a(g) && (T(O, [...a(O), a(g)], !0), T(_, a(g), !0), Ht());
  }
  function mi() {
    a(O).length > 1 && (T(O, a(O).slice(0, -1), !0), T(_, a(O)[a(O).length - 1], !0), Ht());
  }
  async function Lr(c) {
    T(B, c, !0), T(Ae, !0);
    try {
      const [w, A] = await Promise.all([
        Qt("get_task_details", { task_id: c }).catch(() => null),
        Qt("get_task_logs", { task_id: c }).catch(() => ({ data: [] }))
      ]), j = w?.task ?? w?.data?.task ?? w?.data ?? w;
      j && (j.executions_count == null && j.executions && (j.executions_count = j.executions.length), j.total_steps = j.steps?.length ?? 0), T(m, j, !0), T(Pe, A?.data ?? (Array.isArray(A) ? A : []), !0);
    } catch (w) {
      T(s, w?.message || String(w), !0);
    } finally {
      T(Ae, !1);
    }
  }
  function rs() {
    T(B, null), T(m, null), T(Pe, [], !0), T(et, "overview"), T(Fe, null), T(Ee, {}, !0);
  }
  function ns(c) {
    if (!c) return "";
    try {
      const A = JSON.parse(c.replace(/'/g, '"').replace(/None/g, "null").replace(/True/g, "true").replace(/False/g, "false"));
      if (A?.logs && Array.isArray(A.logs))
        return A.logs.map((j) => {
          const se = j.level || "INFO", fe = j.message || "";
          return `[${se}] ${fe}`;
        }).join(`
`);
    } catch {
    }
    const w = c.match(/'logs':\s*\[(.+?)\]/s);
    if (w) {
      const A = [...w[1].matchAll(/'message':\s*'([^']*?)'/g)];
      if (A.length > 0)
        return A.map((j) => j[1]).join(`
`);
    }
    return "";
  }
  async function wi(c, w) {
    if (a(Fe) === c) {
      T(Fe, null);
      return;
    }
    if (T(Fe, c, !0), !a(Ee)[c]) {
      zt[c] = !0;
      try {
        const A = await Qt("get_execution_logs", { logger_name: w, limit: 200 }), j = A?.logs || A?.data?.logs || "";
        if (j && j !== "No logs available")
          a(Ee)[c] = j;
        else {
          const se = a(m)?.executions?.find((Ue) => Ue._id === c), fe = se?.result ? ns(se.result) : "";
          a(Ee)[c] = fe || "No logs available (log buffer rotated)";
        }
      } catch (A) {
        const j = a(m)?.executions?.find((fe) => fe._id === c), se = j?.result ? ns(j.result) : "";
        a(Ee)[c] = se || "Error loading logs: " + (A?.message || String(A));
      } finally {
        delete zt[c];
      }
    }
  }
  function ki(c) {
    T(_e, c, !0), T(Le, !0);
  }
  function ia() {
    T(Le, !1), T(_e, null);
  }
  async function oa(c, w) {
    try {
      const A = await Qt("toggle_schedule", { schedule_id: c, disabled: !w });
      Zt(w ? "Schedule resumed" : "Schedule paused", "success"), await Ht();
    } catch (A) {
      Zt(A?.message || "Error toggling schedule", "error");
    }
  }
  let Ln = Ve({});
  async function la(c) {
    u[c] = !0;
    try {
      const w = await Qt("run_task_now", { task_id: c });
      Zt(w?.message || "Task started", "success"), await Ht(), a(B) === c && await Lr(c);
    } catch (w) {
      Zt(w?.message || "Error running task", "error");
    } finally {
      delete u[c];
    }
  }
  async function Ei(c) {
    Ln[c] = !0;
    try {
      const w = await Qt("stop_task", { task_id: c });
      Zt(w?.message || "Task stopped", "success"), await Ht(), a(B) === c && await Lr(c);
    } catch (w) {
      Zt(w?.message || "Error stopping task", "error");
    } finally {
      delete Ln[c];
    }
  }
  async function da(c) {
    b[c] = !0;
    try {
      const w = await Qt("delete_task", { task_id: c });
      Zt(w?.message || "Task deleted", "success"), a(B) === c && rs(), await Ht();
    } catch (w) {
      Zt(w?.message || "Error deleting task", "error");
    } finally {
      delete b[c];
    }
  }
  function Xr(c) {
    const w = c?.toLowerCase();
    return w === "running" ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300" : w === "pending" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300" : w === "completed" ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300" : w === "failed" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300" : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  }
  function jn(c) {
    if (!c) return "";
    try {
      const w = JSON.parse(c);
      return w.description || w.desc || "";
    } catch {
      return c.length > 80 ? c.substring(0, 80) + "..." : c;
    }
  }
  function ua(c) {
    if (!c) return "-";
    const w = c > 1e15 ? c / 1e6 : c > 1e12 ? c : c * 1e3, A = Date.now() - w, j = Math.floor(A / 1e3), se = Math.floor(j / 60), fe = Math.floor(se / 60), Ue = Math.floor(fe / 24);
    return j < 60 ? "Just now" : se < 60 ? `${se}m ago` : fe < 24 ? `${fe}h ago` : `${Ue}d ago`;
  }
  function fa(c) {
    if (!c) return "One-time";
    const w = Math.floor(c / 86400), A = Math.floor(c % 86400 / 3600), j = Math.floor(c % 3600 / 60);
    return w > 0 ? `Every ${w}d ${A}h` : A > 0 ? `Every ${A}h ${j}m` : j > 0 ? `Every ${j}m` : `Every ${c}s`;
  }
  function va(c) {
    if (!c) return "-";
    const w = c > 1e15 ? c / 1e6 : c > 1e12 ? c : c * 1e3;
    return new Date(w).toLocaleString();
  }
  function tt(c) {
    return c?.status?.toLowerCase() === "running";
  }
  Ho(() => {
    Ht();
    const c = setInterval(Ht, 1e4);
    return () => clearInterval(c);
  });
  var as = Jd(), ss = Rt(as);
  {
    var Ci = (c) => {
      var w = Ml();
      Rr(w, 21, () => a(l), (A) => A.id, (A, j) => {
        var se = Cl(), fe = v(se);
        {
          var Ue = (Ce) => {
            var pt = wl();
            x(Ce, pt);
          }, rt = (Ce) => {
            var pt = kl();
            x(Ce, pt);
          }, ht = (Ce) => {
            var pt = El();
            x(Ce, pt);
          };
          E(fe, (Ce) => {
            a(j).type === "success" ? Ce(Ue) : a(j).type === "error" ? Ce(rt, 1) : Ce(ht, -1);
          });
        }
        var Xt = p(fe);
        F(() => {
          me(se, 1, `px-4 py-3 rounded-lg shadow-lg text-sm font-medium flex items-center gap-2
					${a(j).type === "success" ? "bg-green-600 text-white" : ""}
					${a(j).type === "error" ? "bg-red-600 text-white" : ""}
					${a(j).type === "info" ? "bg-blue-600 text-white" : ""}`), M(Xt, ` ${a(j).message ?? ""}`);
        }), x(A, se);
      }), x(c, w);
    };
    E(ss, (c) => {
      a(l).length > 0 && c(Ci);
    });
  }
  var Mi = p(ss, 2), is = v(Mi);
  {
    var Si = (c) => {
      var w = Tl(), A = v(w), j = p(A, 2), se = v(j), fe = v(se), Ue = v(fe), rt = v(Ue), ht = p(Ue, 2);
      {
        var Xt = (Ne) => {
          var Vt = Sl(), en = v(Vt);
          F(() => M(en, a(_e).description)), x(Ne, Vt);
        };
        E(ht, (Ne) => {
          a(_e).description && Ne(Xt);
        });
      }
      var Ce = p(fe, 2), pt = p(se, 2), jr = v(pt), je = v(jr);
      F(() => {
        M(rt, a(_e).name), M(je, a(_e).code || "No code available");
      }), J("click", A, ia), J("keydown", A, (Ne) => {
        Ne.key === "Escape" && ia();
      }), J("click", Ce, ia), x(c, w);
    };
    E(is, (c) => {
      a(Le) && a(_e) && c(Si);
    });
  }
  var Ti = p(is, 2);
  {
    var Ai = (c) => {
      var w = wd(), A = Rt(w), j = v(A), se = p(A, 2);
      {
        var fe = (rt) => {
          var ht = Al();
          x(rt, ht);
        }, Ue = (rt) => {
          var ht = md(), Xt = Rt(ht), Ce = v(Xt), pt = v(Ce), jr = v(pt), je = v(jr), Ne = v(je), Vt = p(je, 2), en = v(Vt), Nn = p(jr, 2);
          {
            var Rn = (D) => {
              var S = Ll(), re = v(S);
              F(
                (xe) => {
                  me(S, 1, `px-2.5 py-1 rounded-full text-xs font-medium ${xe ?? ""}`, "svelte-11d5b98"), M(re, a(m).status);
                },
                [() => Xr(a(m).status)]
              ), x(D, S);
            };
            E(Nn, (D) => {
              a(m).status && D(Rn);
            });
          }
          var ca = p(Ce, 2), tn = v(ca);
          {
            var Bn = (D) => {
              var S = Rl(), re = v(S);
              {
                var xe = (I) => {
                  var ie = jl();
                  x(I, ie);
                }, Ye = (I) => {
                  var ie = Nl();
                  x(I, ie);
                };
                E(re, (I) => {
                  Ln[a(B)] ? I(xe) : I(Ye, -1);
                });
              }
              F(() => S.disabled = Ln[a(B)]), J("click", S, () => Ei(a(B))), x(D, S);
            }, ha = /* @__PURE__ */ at(() => tt(a(m))), pa = (D) => {
              var S = Pl(), re = v(S);
              {
                var xe = (I) => {
                  var ie = Bl();
                  x(I, ie);
                }, Ye = (I) => {
                  var ie = Dl();
                  x(I, ie);
                };
                E(re, (I) => {
                  u[a(B)] ? I(xe) : I(Ye, -1);
                });
              }
              F(() => S.disabled = u[a(B)]), J("click", S, () => la(a(B))), x(D, S);
            };
            E(tn, (D) => {
              a(ha) ? D(Bn) : D(pa, -1);
            });
          }
          var fr = p(tn, 2), ga = v(fr);
          {
            var Dn = (D) => {
              var S = Fl();
              x(D, S);
            }, _a = (D) => {
              var S = Ol();
              x(D, S);
            };
            E(ga, (D) => {
              b[a(B)] ? D(Dn) : D(_a, -1);
            });
          }
          var Pn = p(Xt, 2), xa = v(Pn), rn = v(xa), vr = p(rn, 2), ba = p(v(vr));
          {
            var Fn = (D) => {
              var S = zl(), re = v(S);
              F(() => M(re, a(m).steps.length)), x(D, S);
            };
            E(ba, (D) => {
              a(m).steps?.length && D(Fn);
            });
          }
          var cr = p(vr, 2), nn = p(v(cr));
          {
            var an = (D) => {
              var S = Hl(), re = v(S);
              F(() => M(re, a(m).executions_count)), x(D, S);
            };
            E(nn, (D) => {
              a(m).executions_count && D(an);
            });
          }
          var sn = p(Pn, 2);
          {
            var On = (D) => {
              var S = Gl(), re = v(S), xe = v(re);
              {
                var Ye = (X) => {
                  const ve = /* @__PURE__ */ at(() => jn(a(m).metadata));
                  var ye = tl(), Ge = Rt(ye);
                  {
                    var oe = (he) => {
                      var Re = Vl(), Se = v(Re);
                      F(() => M(Se, a(ve))), x(he, Re);
                    };
                    E(Ge, (he) => {
                      a(ve) && he(oe);
                    });
                  }
                  x(X, ye);
                };
                E(xe, (X) => {
                  a(m).metadata && X(Ye);
                });
              }
              var I = p(xe, 2), ie = v(I), St = p(v(ie), 2), ee = v(St), qt = p(ie, 2), $e = p(v(qt), 2), H = v($e), Me = p(qt, 2), be = p(v(Me), 2), C = v(be), gt = p(Me, 2), _t = p(v(gt), 2), Tt = v(_t), xt = p(I, 2);
              {
                var At = (X) => {
                  var ve = ql(), ye = v(ve), Ge = p(v(ye), 2), oe = v(Ge), he = p(ye, 2), Re = v(he);
                  F(
                    (Se) => {
                      M(oe, `${Se ?? ""}%`), cl(Re, `width: ${(a(m).step_to_execute ?? 0) / a(m).total_steps * 100}%`);
                    },
                    [
                      () => Math.round((a(m).step_to_execute ?? 0) / a(m).total_steps * 100)
                    ]
                  ), x(X, ve);
                };
                E(xt, (X) => {
                  a(m).total_steps > 0 && X(At);
                });
              }
              var nt = p(xt, 2);
              {
                var bt = (X) => {
                  var ve = $l(), ye = p(v(ve), 2);
                  Rr(ye, 21, () => a(m).schedules, Ca, (Ge, oe) => {
                    var he = Yl(), Re = v(he), Se = v(Re), Lt = v(Se), yt = p(Se, 2);
                    {
                      var P = (ae) => {
                        var Y = Il();
                        x(ae, Y);
                      };
                      E(yt, (ae) => {
                        a(oe).disabled && ae(P);
                      });
                    }
                    var Z = p(yt, 2);
                    {
                      var We = (ae) => {
                        var Y = Ul(), te = v(Y);
                        F((pe) => M(te, `Last: ${pe ?? ""}`), [() => ua(a(oe).last_run_at)]), x(ae, Y);
                      };
                      E(Z, (ae) => {
                        a(oe).last_run_at && ae(We);
                      });
                    }
                    var U = p(Re, 2), ne = v(U);
                    F(
                      (ae) => {
                        me(Se, 1, ms(a(oe).disabled ? "line-through text-gray-400" : "text-gray-700 dark:text-gray-300")), M(Lt, ae), M(ne, a(oe).disabled ? "Resume" : "Pause");
                      },
                      [() => fa(a(oe).repeat_every)]
                    ), J("click", U, () => oa(a(oe)._id, a(oe).disabled)), x(Ge, he);
                  }), x(X, ve);
                };
                E(nt, (X) => {
                  a(m).schedules?.length > 0 && X(bt);
                });
              }
              F(
                (X, ve) => {
                  M(ee, X), M(H, ve), M(C, a(m).executions_count ?? "-"), M(Tt, `${a(m).step_to_execute ?? 0 ?? ""} / ${a(m).total_steps ?? 0 ?? ""}`);
                },
                [
                  () => va(a(m).created_at),
                  () => tt(a(m)) ? "-" : va(a(m).updated_at)
                ]
              ), x(D, S);
            }, ya = (D) => {
              var S = sd(), re = v(S);
              {
                var xe = (I) => {
                  var ie = Wl();
                  x(I, ie);
                }, Ye = (I) => {
                  var ie = ad();
                  Rr(ie, 21, () => a(m).steps, Ca, (St, ee, qt) => {
                    var $e = nd(), H = v($e), Me = v(H), be = v(Me), C = v(be);
                    {
                      var gt = (P) => {
                        var Z = Kl();
                        x(P, Z);
                      }, _t = (P) => {
                        var Z = Jl();
                        x(P, Z);
                      }, Tt = (P) => {
                        var Z = Zl();
                        x(P, Z);
                      }, xt = (P) => {
                        var Z = el();
                        Z.nodeValue = qt + 1, x(P, Z);
                      };
                      E(C, (P) => {
                        a(ee).status === "completed" ? P(gt) : a(ee).status === "running" ? P(_t, 1) : a(ee).status === "failed" ? P(Tt, 2) : P(xt, -1);
                      });
                    }
                    var At = p(be, 2), nt = v(At), bt = v(nt);
                    bt.textContent = `Step ${qt + 1}`;
                    var X = p(bt, 2), ve = v(X), ye = p(X, 2);
                    {
                      var Ge = (P) => {
                        var Z = Ql();
                        x(P, Z);
                      };
                      E(ye, (P) => {
                        a(ee).is_async && P(Ge);
                      });
                    }
                    var oe = p(nt, 2);
                    {
                      var he = (P) => {
                        var Z = ed(), We = p(v(Z), 2), U = v(We), ne = p(We, 2);
                        {
                          var ae = (Y) => {
                            var te = Xl(), pe = v(te);
                            F(() => M(pe, `— ${a(ee).codex.description ?? ""}`)), x(Y, te);
                          };
                          E(ne, (Y) => {
                            a(ee).codex.description && Y(ae);
                          });
                        }
                        F(() => M(U, a(ee).codex.name)), x(P, Z);
                      };
                      E(oe, (P) => {
                        a(ee).codex && P(he);
                      });
                    }
                    var Re = p(oe, 2);
                    {
                      var Se = (P) => {
                        var Z = td(), We = v(Z);
                        F(() => M(We, `Delay before next: ${a(ee).run_next_after ?? ""}s`)), x(P, Z);
                      };
                      E(Re, (P) => {
                        a(ee).run_next_after && P(Se);
                      });
                    }
                    var Lt = p(Me, 2);
                    {
                      var yt = (P) => {
                        var Z = rd();
                        J("click", Z, () => ki(a(ee).codex)), x(P, Z);
                      };
                      E(Lt, (P) => {
                        a(ee).codex?.code && P(yt);
                      });
                    }
                    F(
                      (P) => {
                        me(be, 1, `flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold
												${a(ee).status === "completed" ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-400" : a(ee).status === "running" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-400" : a(ee).status === "failed" ? "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400" : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"}`), me(X, 1, `px-1.5 py-0.5 rounded text-xs font-medium ${P ?? ""}`, "svelte-11d5b98"), M(ve, a(ee).status || "pending");
                      },
                      [() => Xr(a(ee).status || "pending")]
                    ), x(St, $e);
                  }), x(I, ie);
                };
                E(re, (I) => {
                  a(m).steps?.length ? I(Ye, -1) : I(xe);
                });
              }
              x(D, S);
            }, ma = (D) => {
              var S = yd(), re = v(S);
              {
                var xe = (I) => {
                  var ie = id();
                  x(I, ie);
                }, Ye = (I) => {
                  var ie = bd(), St = Rt(ie);
                  Rr(St, 21, () => a(m).executions, Ca, ($e, H) => {
                    var Me = _d(), be = v(Me), C = v(be), gt = v(C);
                    {
                      var _t = (U) => {
                        var ne = od();
                        x(U, ne);
                      }, Tt = (U) => {
                        var ne = ld();
                        x(U, ne);
                      }, xt = (U) => {
                        var ne = dd();
                        x(U, ne);
                      }, At = (U) => {
                        var ne = ud();
                        x(U, ne);
                      };
                      E(gt, (U) => {
                        a(H).status === "completed" ? U(_t) : a(H).status === "running" ? U(Tt, 1) : a(H).status === "failed" ? U(xt, 2) : U(At, -1);
                      });
                    }
                    var nt = p(C, 2), bt = v(nt), X = v(bt), ve = v(X), ye = p(X, 2), Ge = v(ye), oe = p(bt, 2), he = v(oe), Re = v(he), Se = p(he, 2);
                    {
                      var Lt = (U) => {
                        var ne = fd(), ae = v(ne);
                        F((Y) => M(ae, `${Y ?? ""}${a(H).result.length > 80 ? "..." : ""}`), [() => a(H).result.substring(0, 80)]), x(U, ne);
                      };
                      E(Se, (U) => {
                        a(H).result && U(Lt);
                      });
                    }
                    var yt = p(nt, 2), P = v(yt), Z = p(be, 2);
                    {
                      var We = (U) => {
                        var ne = gd(), ae = v(ne);
                        {
                          var Y = (le) => {
                            var Oe = vd(), jt = p(v(Oe), 2), dn = v(jt);
                            F(() => M(dn, a(H).result)), x(le, Oe);
                          };
                          E(ae, (le) => {
                            a(H).result && le(Y);
                          });
                        }
                        var te = p(ae, 2), pe = p(v(te), 2);
                        {
                          var er = (le) => {
                            var Oe = cd();
                            x(le, Oe);
                          }, on = (le) => {
                            var Oe = hd(), jt = v(Oe);
                            F(() => M(jt, a(Ee)[a(H)._id])), x(le, Oe);
                          }, ln = (le) => {
                            var Oe = pd();
                            x(le, Oe);
                          };
                          E(pe, (le) => {
                            zt[a(H)._id] ? le(er) : a(Ee)[a(H)._id] ? le(on, 1) : le(ln, -1);
                          });
                        }
                        x(U, ne);
                      };
                      E(Z, (U) => {
                        a(Fe) === a(H)._id && U(We);
                      });
                    }
                    F(
                      (U, ne) => {
                        M(ve, a(H).name || `Execution #${a(H)._id}`), me(ye, 1, `px-1.5 py-0.5 rounded text-xs font-medium ${U ?? ""}`, "svelte-11d5b98"), M(Ge, a(H).status), M(Re, ne), me(P, 0, `w-4 h-4 text-gray-400 transition-transform ${a(Fe) === a(H)._id ? "rotate-180" : ""}`);
                      },
                      [
                        () => Xr(a(H).status),
                        () => va(a(H).created_at)
                      ]
                    ), J("click", be, () => wi(a(H)._id, a(H).logger_name)), x($e, Me);
                  });
                  var ee = p(St, 2);
                  {
                    var qt = ($e) => {
                      var H = xd(), Me = v(H);
                      J("click", Me, async () => {
                        T(Ae, !0), await Lr(a(B));
                      }), x($e, H);
                    };
                    E(ee, ($e) => {
                      a(m).exec_has_more && $e(qt);
                    });
                  }
                  x(I, ie);
                };
                E(re, (I) => {
                  a(m).executions?.length ? I(Ye, -1) : I(xe);
                });
              }
              x(D, S);
            };
            E(sn, (D) => {
              a(et) === "overview" ? D(On) : a(et) === "steps" ? D(ya, 1) : a(et) === "executions" && D(ma, 2);
            });
          }
          F(
            (D, S) => {
              M(Ne, a(m).name || a(B)), M(en, `ID: ${a(B) ?? ""}`), fr.disabled = D, Ma(fr, "title", S), me(rn, 1, `pb-3 text-sm font-medium border-b-2 transition-colors
							${a(et) === "overview" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`), me(vr, 1, `pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5
							${a(et) === "steps" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`), me(cr, 1, `pb-3 text-sm font-medium border-b-2 transition-colors flex items-center gap-1.5
							${a(et) === "executions" ? "border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-300"}`);
            },
            [
              () => b[a(B)] || tt(a(m)),
              () => tt(a(m)) ? "Cannot delete a running task" : ""
            ]
          ), J("click", fr, () => da(a(B))), J("click", rn, () => T(et, "overview")), J("click", vr, () => T(et, "steps")), J("click", cr, () => T(et, "executions")), x(rt, ht);
        };
        E(se, (rt) => {
          a(Ae) ? rt(fe) : a(m) && rt(Ue, 1);
        });
      }
      J("click", j, rs), x(c, w);
    }, Li = (c) => {
      var w = Kd(), A = Rt(w), j = p(v(A), 2), se = v(j), fe = v(se), Ue = p(fe, 2), rt = p(se, 2), ht = p(A, 2);
      {
        var Xt = (je) => {
          var Ne = kd(), Vt = p(v(Ne));
          F(() => M(Vt, ` ${a(s) ?? ""}`)), x(je, Ne);
        };
        E(ht, (je) => {
          a(s) && je(Xt);
        });
      }
      var Ce = p(ht, 2);
      {
        var pt = (je) => {
          var Ne = Ed();
          x(je, Ne);
        }, jr = (je) => {
          var Ne = Wd(), Vt = Rt(Ne), en = v(Vt), Nn = v(en), Rn = v(Nn), ca = v(Rn), tn = p(Rn, 2), Bn = v(tn);
          {
            var ha = (S) => {
              var re = Cd();
              x(S, re);
            };
            E(Bn, (S) => {
              a(Ar).running > 0 && S(ha);
            });
          }
          var pa = p(Bn), fr = p(tn, 2), ga = v(fr), Dn = p(fr, 2), _a = v(Dn), Pn = p(Dn, 2), xa = v(Pn), rn = p(Nn, 2), vr = v(rn), ba = p(v(vr), 2), Fn = p(vr, 2), cr = v(Fn);
          cr.value = cr.__value = "";
          var nn = p(cr);
          nn.value = nn.__value = "running";
          var an = p(nn);
          an.value = an.__value = "pending";
          var sn = p(an);
          sn.value = sn.__value = "completed";
          var On = p(sn);
          On.value = On.__value = "failed";
          var ya = p(Vt, 2);
          {
            var ma = (S) => {
              var re = Md(), xe = p(v(re), 2), Ye = v(xe);
              F(() => M(Ye, a(i) || a(d) ? "No matching tasks" : "No tasks found")), x(S, re);
            }, D = (S) => {
              var re = Gd(), xe = Rt(re);
              {
                var Ye = (H) => {
                  var Me = zd();
                  Rr(Me, 21, () => a(sa), (be) => be._id, (be, C) => {
                    var gt = Od(), _t = v(gt), Tt = v(_t), xt = v(Tt), At = v(xt), nt = v(At), bt = p(At, 2), X = v(bt), ve = p(xt, 2), ye = v(ve);
                    {
                      var Ge = ($) => {
                        var Q = Sd();
                        x($, Q);
                      }, oe = /* @__PURE__ */ at(() => tt(a(C)));
                      E(ye, ($) => {
                        a(oe) && $(Ge);
                      });
                    }
                    var he = p(ye, 2), Re = v(he), Se = p(_t, 2), Lt = v(Se);
                    {
                      var yt = ($) => {
                        var Q = Td(), Ke = v(Q);
                        F((Nt) => M(Ke, Nt), [() => jn(a(C).metadata)]), x($, Q);
                      }, P = /* @__PURE__ */ at(() => jn(a(C).metadata));
                      E(Lt, ($) => {
                        a(P) && $(yt);
                      });
                    }
                    var Z = p(Lt, 2), We = v(Z);
                    {
                      var U = ($) => {
                        const Q = /* @__PURE__ */ at(() => a(C).schedules[0]);
                        var Ke = Ld(), Nt = Rt(Ke), zn = p(v(Nt), 2), tr = v(zn), un = p(Nt, 2);
                        {
                          var Ri = (fn) => {
                            var os = Ad(), Bi = v(os);
                            F((Di) => M(Bi, `Last: ${Di ?? ""}`), [() => ua(a(Q).last_run_at)]), x(fn, os);
                          };
                          E(un, (fn) => {
                            a(Q).last_run_at && fn(Ri);
                          });
                        }
                        F(
                          (fn) => {
                            me(zn, 1, ms(a(Q).disabled ? "line-through text-gray-400" : "")), M(tr, fn);
                          },
                          [() => fa(a(Q).repeat_every)]
                        ), x($, Ke);
                      }, ne = ($) => {
                        var Q = jd();
                        x($, Q);
                      };
                      E(We, ($) => {
                        a(C).schedules?.length > 0 ? $(U) : $(ne, -1);
                      });
                    }
                    var ae = p(We, 2), Y = p(v(ae)), te = p(Se, 2), pe = v(te), er = p(pe, 2);
                    {
                      var on = ($) => {
                        var Q = Bd(), Ke = v(Q);
                        {
                          var Nt = (tr) => {
                            var un = Nd();
                            x(tr, un);
                          }, zn = (tr) => {
                            var un = Rd();
                            x(tr, un);
                          };
                          E(Ke, (tr) => {
                            u[a(C)._id] ? tr(Nt) : tr(zn, -1);
                          });
                        }
                        F(() => Q.disabled = u[a(C)._id]), J("click", Q, () => la(a(C)._id)), x($, Q);
                      }, ln = /* @__PURE__ */ at(() => !tt(a(C)));
                      E(er, ($) => {
                        a(ln) && $(on);
                      });
                    }
                    var le = p(er, 2);
                    {
                      var Oe = ($) => {
                        const Q = /* @__PURE__ */ at(() => a(C).schedules[0]);
                        var Ke = Dd(), Nt = v(Ke);
                        F(() => {
                          me(Ke, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${a(Q).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), M(Nt, a(Q).disabled ? "Resume" : "Pause");
                        }), J("click", Ke, () => oa(a(Q)._id, a(Q).disabled)), x($, Ke);
                      };
                      E(le, ($) => {
                        a(C).schedules?.length > 0 && $(Oe);
                      });
                    }
                    var jt = p(le, 2), dn = v(jt);
                    {
                      var ji = ($) => {
                        var Q = Pd();
                        x($, Q);
                      }, Ni = ($) => {
                        var Q = Fd();
                        x($, Q);
                      };
                      E(dn, ($) => {
                        b[a(C)._id] ? $(ji) : $(Ni, -1);
                      });
                    }
                    F(
                      ($, Q, Ke, Nt) => {
                        M(nt, a(C).name), M(X, `ID: ${$ ?? ""}`), me(he, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${Q ?? ""}`, "svelte-11d5b98"), M(Re, a(C).status || "Unknown"), M(Y, ` ${a(C).executions_count ?? 0 ?? ""} runs`), jt.disabled = Ke, Ma(jt, "title", Nt);
                      },
                      [
                        () => a(C)._id.substring(0, 12),
                        () => Xr(a(C).status),
                        () => b[a(C)._id] || tt(a(C)),
                        () => tt(a(C)) ? "Cannot delete a running task" : ""
                      ]
                    ), J("click", ae, () => Lr(a(C)._id)), J("click", pe, () => Lr(a(C)._id)), J("click", jt, () => da(a(C)._id)), x(be, gt);
                  }), x(H, Me);
                }, I = (H) => {
                  var Me = $d();
                  Rr(Me, 21, () => a(sa), (be) => be._id, (be, C) => {
                    var gt = Yd(), _t = v(gt), Tt = v(_t);
                    {
                      var xt = (Y) => {
                        var te = Hd();
                        x(Y, te);
                      }, At = /* @__PURE__ */ at(() => tt(a(C)));
                      E(Tt, (Y) => {
                        a(At) && Y(xt);
                      });
                    }
                    var nt = p(Tt, 2), bt = v(nt), X = p(_t, 2), ve = v(X), ye = v(ve), Ge = p(ve, 2), oe = v(Ge);
                    {
                      var he = (Y) => {
                        var te = qd(), pe = Rt(te), er = v(pe), on = p(pe, 2);
                        {
                          var ln = (le) => {
                            var Oe = Vd(), jt = v(Oe);
                            F((dn) => M(jt, `Last: ${dn ?? ""}`), [
                              () => ua(a(C).schedules[0].last_run_at)
                            ]), x(le, Oe);
                          };
                          E(on, (le) => {
                            a(C).schedules[0].last_run_at && le(ln);
                          });
                        }
                        F((le) => M(er, le), [() => fa(a(C).schedules[0].repeat_every)]), x(Y, te);
                      };
                      E(oe, (Y) => {
                        a(C).schedules?.length > 0 && Y(he);
                      });
                    }
                    var Re = p(oe, 2), Se = v(Re), Lt = p(X, 2), yt = v(Lt), P = p(yt, 2);
                    {
                      var Z = (Y) => {
                        var te = Id();
                        F(() => te.disabled = u[a(C)._id]), J("click", te, () => la(a(C)._id)), x(Y, te);
                      }, We = /* @__PURE__ */ at(() => !tt(a(C)));
                      E(P, (Y) => {
                        a(We) && Y(Z);
                      });
                    }
                    var U = p(P, 2);
                    {
                      var ne = (Y) => {
                        const te = /* @__PURE__ */ at(() => a(C).schedules[0]);
                        var pe = Ud(), er = v(pe);
                        F(() => {
                          me(pe, 1, `px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors
											${a(te).disabled ? "text-blue-700 dark:text-blue-400 border-blue-300 dark:border-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/30" : "text-yellow-700 dark:text-yellow-400 border-yellow-300 dark:border-yellow-700 hover:bg-yellow-50 dark:hover:bg-yellow-900/30"}`), M(er, a(te).disabled ? "Resume" : "Pause");
                        }), J("click", pe, () => oa(a(te)._id, a(te).disabled)), x(Y, pe);
                      };
                      E(U, (Y) => {
                        a(C).schedules?.length > 0 && Y(ne);
                      });
                    }
                    var ae = p(U, 2);
                    F(
                      (Y, te, pe) => {
                        me(nt, 1, `px-2 py-0.5 rounded-full text-xs font-medium ${Y ?? ""}`, "svelte-11d5b98"), M(bt, a(C).status || "Unknown"), M(ye, a(C).name), M(Se, `${a(C).executions_count ?? 0 ?? ""} runs`), ae.disabled = te, Ma(ae, "title", pe);
                      },
                      [
                        () => Xr(a(C).status),
                        () => b[a(C)._id] || tt(a(C)),
                        () => tt(a(C)) ? "Cannot delete a running task" : ""
                      ]
                    ), J("click", yt, () => Lr(a(C)._id)), J("click", ae, () => da(a(C)._id)), x(be, gt);
                  }), x(H, Me);
                };
                E(xe, (H) => {
                  a(ur) === "grid" ? H(Ye) : H(I, -1);
                });
              }
              var ie = p(xe, 2), St = v(ie), ee = p(St, 2), qt = v(ee), $e = p(ee, 2);
              F(() => {
                St.disabled = a(O).length <= 1, M(qt, `Page ${a(O).length ?? ""}`), $e.disabled = !a(W);
              }), J("click", St, mi), J("click", $e, yi), x(S, re);
            };
            E(ya, (S) => {
              a(sa).length === 0 ? S(ma) : S(D, -1);
            });
          }
          F(() => {
            M(ca, `${a(Ar).total ?? ""} tasks`), M(pa, ` ${a(Ar).running ?? ""} running`), M(ga, `${a(Ar).pending ?? ""} pending`), M(_a, `${a(Ar).completed ?? ""} completed`), M(xa, `${a(Ar).failed ?? ""} failed`);
          }), yl(ba, () => a(i), (S) => T(i, S)), pl(Fn, () => a(d), (S) => T(d, S)), x(je, Ne);
        };
        E(Ce, (je) => {
          a(n) ? je(pt) : je(jr, -1);
        });
      }
      F(() => {
        me(fe, 1, `px-2.5 py-1.5 transition-colors ${a(ur) === "grid" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`), me(Ue, 1, `px-2.5 py-1.5 transition-colors ${a(ur) === "list" ? "bg-blue-600 text-white" : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-700"}`);
      }), J("click", fe, () => T(ur, "grid")), J("click", Ue, () => T(ur, "list")), J("click", rt, Ht), x(c, w);
    };
    E(Ti, (c) => {
      a(B) ? c(Ai) : c(Li, -1);
    });
  }
  x(e, as), Ns();
}
Jo(["click", "keydown"]);
function tu(e, t) {
  const r = rl(Qd, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        al(r);
      } catch {
      }
    }
  };
}
export {
  tu as default
};
