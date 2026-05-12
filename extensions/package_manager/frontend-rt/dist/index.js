var Qa = Object.defineProperty;
var ki = (e) => {
  throw TypeError(e);
};
var Xa = (e, t, r) => t in e ? Qa(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var rt = (e, t, r) => Xa(e, typeof t != "symbol" ? t + "" : t, r), Pn = (e, t, r) => t.has(e) || ki("Cannot " + r);
var s = (e, t, r) => (Pn(e, t, "read from private field"), r ? r.call(e) : t.get(e)), R = (e, t, r) => t.has(e) ? ki("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r), L = (e, t, r, n) => (Pn(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r), W = (e, t, r) => (Pn(e, t, "access private method"), r);
var Di = Array.isArray, Za = Array.prototype.indexOf, pr = Array.prototype.includes, vn = Array.from, $a = Object.defineProperty, Nr = Object.getOwnPropertyDescriptor, es = Object.prototype, ts = Array.prototype, rs = Object.getPrototypeOf, wi = Object.isExtensible;
const ns = () => {
};
function is(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Li() {
  var e, t, r = new Promise((n, i) => {
    e = n, t = i;
  });
  return { promise: r, resolve: e, reject: t };
}
const we = 2, xr = 4, hn = 8, Bi = 1 << 24, gt = 16, ot = 32, jt = 64, Un = 128, Je = 512, le = 1024, ke = 2048, _t = 4096, Ae = 8192, Ge = 16384, sr = 32768, zn = 1 << 25, yr = 65536, jn = 1 << 17, as = 1 << 18, wr = 1 << 19, ss = 1 << 20, Ct = 1 << 25, nr = 65536, ln = 1 << 21, Or = 1 << 22, Ut = 1 << 23, $r = Symbol("$state"), wt = new class extends Error {
  constructor() {
    super(...arguments);
    rt(this, "name", "StaleReactionError");
    rt(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function os() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ls(e, t, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function fs(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function ds() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function us(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function cs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function _s() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const ps = 1, xs = 2, ys = 16, bs = 1, ms = 2, ce = Symbol(), ks = "http://www.w3.org/1999/xhtml", ws = "http://www.w3.org/2000/svg", Es = "http://www.w3.org/1998/Math/MathML";
function Ss() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function Ts() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Ui(e) {
  return e === this.v;
}
function As(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function zi(e) {
  return !As(e, this.v);
}
let ze = null;
function br(e) {
  ze = e;
}
function ji(e, t = !1, r) {
  ze = {
    p: ze,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    r: (
      /** @type {Effect} */
      B
    ),
    l: null
  };
}
function Vi(e) {
  var t = (
    /** @type {ComponentContext} */
    ze
  ), r = t.e;
  if (r !== null) {
    t.e = null;
    for (var n of r)
      fa(n);
  }
  return t.i = !0, ze = t.p, /** @type {T} */
  {};
}
function qi() {
  return !0;
}
let Kt = [];
function Hi() {
  var e = Kt;
  Kt = [], is(e);
}
function ur(e) {
  if (Kt.length === 0 && !Fr) {
    var t = Kt;
    queueMicrotask(() => {
      t === Kt && Hi();
    });
  }
  Kt.push(e);
}
function Cs() {
  for (; Kt.length > 0; )
    Hi();
}
function Yi(e) {
  var t = B;
  if (t === null)
    return z.f |= Ut, e;
  if ((t.f & sr) === 0 && (t.f & xr) === 0)
    throw e;
  Lt(e, t);
}
function Lt(e, t) {
  for (; t !== null; ) {
    if ((t.f & Un) !== 0) {
      if ((t.f & sr) === 0)
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
const Is = -7169;
function ee(e, t) {
  e.f = e.f & Is | t;
}
function Zn(e) {
  (e.f & Je) !== 0 || e.deps === null ? ee(e, le) : ee(e, _t);
}
function Ki(e) {
  if (e !== null)
    for (const t of e)
      (t.f & we) === 0 || (t.f & nr) === 0 || (t.f ^= nr, Ki(
        /** @type {Derived} */
        t.deps
      ));
}
function Ji(e, t, r) {
  (e.f & ke) !== 0 ? t.add(e) : (e.f & _t) !== 0 && r.add(e), Ki(e.deps), ee(e, le);
}
const Yt = /* @__PURE__ */ new Set();
let P = null, at = null, Vn = null, Fr = !1, On = !1, dr = null, en = null;
var Ei = 0;
let Rs = 1;
var cr, vr, Wt, Et, ct, Br, Le, Ur, Ot, St, vt, hr, gr, Qt, ie, tn, Gi, rn, qn, nn, Ms;
const dn = class dn {
  constructor() {
    R(this, ie);
    rt(this, "id", Rs++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    rt(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    rt(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, cr, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, vr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    R(this, Wt, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    R(this, Et, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    R(this, ct, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    R(this, Br, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    R(this, Le, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    R(this, Ur, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    R(this, Ot, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    R(this, St, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    R(this, vt, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    R(this, hr, /* @__PURE__ */ new Set());
    rt(this, "is_fork", !1);
    R(this, gr, !1);
    /** @type {Set<Batch>} */
    R(this, Qt, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(t) {
    s(this, vt).has(t) || s(this, vt).set(t, { d: [], m: [] }), s(this, hr).delete(t);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(t, r = (n) => this.schedule(n)) {
    var n = s(this, vt).get(t);
    if (n) {
      s(this, vt).delete(t);
      for (var i of n.d)
        ee(i, ke), r(i);
      for (i of n.m)
        ee(i, _t), r(i);
    }
    s(this, hr).add(t);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(t, r, n = !1) {
    t.v !== ce && !this.previous.has(t) && this.previous.set(t, t.v), (t.f & Ut) === 0 && (this.current.set(t, [r, n]), at?.set(t, r)), this.is_fork || (t.v = r);
  }
  activate() {
    P = this;
  }
  deactivate() {
    P = null, at = null;
  }
  flush() {
    try {
      On = !0, P = this, W(this, ie, rn).call(this);
    } finally {
      Ei = 0, Vn = null, dr = null, en = null, On = !1, P = null, at = null, er.clear();
    }
  }
  discard() {
    for (const t of s(this, vr)) t(this);
    s(this, vr).clear(), s(this, Wt).clear(), Yt.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(t) {
    s(this, Ur).push(t);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(t, r) {
    let n = s(this, Et).get(r) ?? 0;
    if (s(this, Et).set(r, n + 1), t) {
      let i = s(this, ct).get(r) ?? 0;
      s(this, ct).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(t, r, n) {
    let i = s(this, Et).get(r) ?? 0;
    if (i === 1 ? s(this, Et).delete(r) : s(this, Et).set(r, i - 1), t) {
      let a = s(this, ct).get(r) ?? 0;
      a === 1 ? s(this, ct).delete(r) : s(this, ct).set(r, a - 1);
    }
    s(this, gr) || n || (L(this, gr, !0), ur(() => {
      L(this, gr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(t, r) {
    for (const n of t)
      s(this, Ot).add(n);
    for (const n of r)
      s(this, St).add(n);
    t.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(t) {
    s(this, cr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    s(this, vr).add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(t) {
    s(this, Wt).add(t);
  }
  run_fork_commit_callbacks() {
    for (const t of s(this, Wt)) t(this);
    s(this, Wt).clear();
  }
  settled() {
    return (s(this, Br) ?? L(this, Br, Li())).promise;
  }
  static ensure() {
    if (P === null) {
      const t = P = new dn();
      On || (Yt.add(P), Fr || ur(() => {
        P === t && t.flush();
      }));
    }
    return P;
  }
  apply() {
    {
      at = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(t) {
    if (Vn = t, t.b?.is_pending && (t.f & (xr | hn | Bi)) !== 0 && (t.f & sr) === 0) {
      t.b.defer_effect(t);
      return;
    }
    for (var r = t; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (dr !== null && r === B && (z === null || (z.f & we) === 0))
        return;
      if ((n & (jt | ot)) !== 0) {
        if ((n & le) === 0)
          return;
        r.f ^= le;
      }
    }
    s(this, Le).push(r);
  }
};
cr = new WeakMap(), vr = new WeakMap(), Wt = new WeakMap(), Et = new WeakMap(), ct = new WeakMap(), Br = new WeakMap(), Le = new WeakMap(), Ur = new WeakMap(), Ot = new WeakMap(), St = new WeakMap(), vt = new WeakMap(), hr = new WeakMap(), gr = new WeakMap(), Qt = new WeakMap(), ie = new WeakSet(), tn = function() {
  return this.is_fork || s(this, ct).size > 0;
}, Gi = function() {
  for (const n of s(this, Qt))
    for (const i of s(n, ct).keys()) {
      for (var t = !1, r = i; r.parent !== null; ) {
        if (s(this, vt).has(r)) {
          t = !0;
          break;
        }
        r = r.parent;
      }
      if (!t)
        return !0;
    }
  return !1;
}, rn = function() {
  var o;
  if (Ei++ > 1e3 && (Yt.delete(this), Fs()), !W(this, ie, tn).call(this)) {
    for (const l of s(this, Ot))
      s(this, St).delete(l), ee(l, ke), this.schedule(l);
    for (const l of s(this, St))
      ee(l, _t), this.schedule(l);
  }
  const t = s(this, Le);
  L(this, Le, []), this.apply();
  var r = dr = [], n = [], i = en = [];
  for (const l of t)
    try {
      W(this, ie, qn).call(this, l, r, n);
    } catch (f) {
      throw Xi(l), f;
    }
  if (P = null, i.length > 0) {
    var a = dn.ensure();
    for (const l of i)
      a.schedule(l);
  }
  if (dr = null, en = null, W(this, ie, tn).call(this) || W(this, ie, Gi).call(this)) {
    W(this, ie, nn).call(this, n), W(this, ie, nn).call(this, r);
    for (const [l, f] of s(this, vt))
      Qi(l, f);
  } else {
    s(this, Et).size === 0 && Yt.delete(this), s(this, Ot).clear(), s(this, St).clear();
    for (const l of s(this, cr)) l(this);
    s(this, cr).clear(), Si(n), Si(r), s(this, Br)?.resolve();
  }
  var c = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    P
  );
  if (s(this, Le).length > 0) {
    const l = c ?? (c = this);
    s(l, Le).push(...s(this, Le).filter((f) => !s(l, Le).includes(f)));
  }
  c !== null && (Yt.add(c), W(o = c, ie, rn).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
qn = function(t, r, n) {
  t.f ^= le;
  for (var i = t.first; i !== null; ) {
    var a = i.f, c = (a & (ot | jt)) !== 0, o = c && (a & le) !== 0, l = o || (a & Ae) !== 0 || s(this, vt).has(i);
    if (!l && i.fn !== null) {
      c ? i.f ^= le : (a & xr) !== 0 ? r.push(i) : Yr(i) && ((a & gt) !== 0 && s(this, St).add(i), kr(i));
      var f = i.first;
      if (f !== null) {
        i = f;
        continue;
      }
    }
    for (; i !== null; ) {
      var p = i.next;
      if (p !== null) {
        i = p;
        break;
      }
      i = i.parent;
    }
  }
}, /**
 * @param {Effect[]} effects
 */
nn = function(t) {
  for (var r = 0; r < t.length; r += 1)
    Ji(t[r], s(this, Ot), s(this, St));
}, Ms = function() {
  var p, m, b;
  for (const x of Yt) {
    var t = x.id < this.id, r = [];
    for (const [v, [C, M]] of this.current) {
      if (x.current.has(v)) {
        var n = (
          /** @type {[any, boolean]} */
          x.current.get(v)[0]
        );
        if (t && C !== n)
          x.current.set(v, [C, M]);
        else
          continue;
      }
      r.push(v);
    }
    var i = [...x.current.keys()].filter((v) => !this.current.has(v));
    if (i.length === 0)
      t && x.discard();
    else if (r.length > 0) {
      if (t)
        for (const v of s(this, hr))
          x.unskip_effect(v, (C) => {
            var M;
            (C.f & (gt | Or)) !== 0 ? x.schedule(C) : W(M = x, ie, nn).call(M, [C]);
          });
      x.activate();
      var a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
      for (var o of r)
        Wi(o, i, a, c);
      c = /* @__PURE__ */ new Map();
      var l = [...x.current.keys()].filter(
        (v) => this.current.has(v) ? (
          /** @type {[any, boolean]} */
          this.current.get(v)[0] !== v
        ) : !0
      );
      for (const v of s(this, Ur))
        (v.f & (Ge | Ae | jn)) === 0 && $n(v, l, c) && ((v.f & (Or | gt)) !== 0 ? (ee(v, ke), x.schedule(v)) : s(x, Ot).add(v));
      if (s(x, Le).length > 0) {
        x.apply();
        for (var f of s(x, Le))
          W(p = x, ie, qn).call(p, f, [], []);
        L(x, Le, []);
      }
      x.deactivate();
    }
  }
  for (const x of Yt)
    s(x, Qt).has(this) && (s(x, Qt).delete(this), s(x, Qt).size === 0 && !W(m = x, ie, tn).call(m) && (x.activate(), W(b = x, ie, rn).call(b)));
};
let ir = dn;
function Ns(e) {
  var t = Fr;
  Fr = !0;
  try {
    for (var r; ; ) {
      if (Cs(), P === null)
        return (
          /** @type {T} */
          r
        );
      P.flush();
    }
  } finally {
    Fr = t;
  }
}
function Fs() {
  try {
    cs();
  } catch (e) {
    Lt(e, Vn);
  }
}
let kt = null;
function Si(e) {
  var t = e.length;
  if (t !== 0) {
    for (var r = 0; r < t; ) {
      var n = e[r++];
      if ((n.f & (Ge | Ae)) === 0 && Yr(n) && (kt = /* @__PURE__ */ new Set(), kr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && ca(n), kt?.size > 0)) {
        er.clear();
        for (const i of kt) {
          if ((i.f & (Ge | Ae)) !== 0) continue;
          const a = [i];
          let c = i.parent;
          for (; c !== null; )
            kt.has(c) && (kt.delete(c), a.push(c)), c = c.parent;
          for (let o = a.length - 1; o >= 0; o--) {
            const l = a[o];
            (l.f & (Ge | Ae)) === 0 && kr(l);
          }
        }
        kt.clear();
      }
    }
    kt = null;
  }
}
function Wi(e, t, r, n) {
  if (!r.has(e) && (r.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const a = i.f;
      (a & we) !== 0 ? Wi(
        /** @type {Derived} */
        i,
        t,
        r,
        n
      ) : (a & (Or | gt)) !== 0 && (a & ke) === 0 && $n(i, t, n) && (ee(i, ke), ei(
        /** @type {Effect} */
        i
      ));
    }
}
function $n(e, t, r) {
  const n = r.get(e);
  if (n !== void 0) return n;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (pr.call(t, i))
        return !0;
      if ((i.f & we) !== 0 && $n(
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
function ei(e) {
  P.schedule(e);
}
function Qi(e, t) {
  if (!((e.f & ot) !== 0 && (e.f & le) !== 0)) {
    (e.f & ke) !== 0 ? t.d.push(e) : (e.f & _t) !== 0 && t.m.push(e), ee(e, le);
    for (var r = e.first; r !== null; )
      Qi(r, t), r = r.next;
  }
}
function Xi(e) {
  ee(e, le);
  for (var t = e.first; t !== null; )
    Xi(t), t = t.next;
}
function Ps(e) {
  let t = 0, r = ar(0), n;
  return () => {
    ii() && (u(r), gn(() => (t === 0 && (n = _n(() => e(() => Pr(r)))), t += 1, () => {
      ur(() => {
        t -= 1, t === 0 && (n?.(), n = void 0, Pr(r));
      });
    })));
  };
}
var Os = yr | wr;
function Ds(e, t, r, n) {
  new Ls(e, t, r, n);
}
var Ve, Xn, qe, Xt, Re, He, Te, Be, Tt, Zt, Dt, _r, zr, jr, At, un, Z, Bs, Us, zs, Hn, an, sn, Yn, Kn;
class Ls {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(t, r, n, i) {
    R(this, Z);
    /** @type {Boundary | null} */
    rt(this, "parent");
    rt(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    rt(this, "transform_error");
    /** @type {TemplateNode} */
    R(this, Ve);
    /** @type {TemplateNode | null} */
    R(this, Xn, null);
    /** @type {BoundaryProps} */
    R(this, qe);
    /** @type {((anchor: Node) => void)} */
    R(this, Xt);
    /** @type {Effect} */
    R(this, Re);
    /** @type {Effect | null} */
    R(this, He, null);
    /** @type {Effect | null} */
    R(this, Te, null);
    /** @type {Effect | null} */
    R(this, Be, null);
    /** @type {DocumentFragment | null} */
    R(this, Tt, null);
    R(this, Zt, 0);
    R(this, Dt, 0);
    R(this, _r, !1);
    /** @type {Set<Effect>} */
    R(this, zr, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    R(this, jr, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    R(this, At, null);
    R(this, un, Ps(() => (L(this, At, ar(s(this, Zt))), () => {
      L(this, At, null);
    })));
    L(this, Ve, t), L(this, qe, r), L(this, Xt, (a) => {
      var c = (
        /** @type {Effect} */
        B
      );
      c.b = this, c.f |= Un, n(a);
    }), this.parent = /** @type {Effect} */
    B.b, this.transform_error = i ?? this.parent?.transform_error ?? ((a) => a), L(this, Re, ai(() => {
      W(this, Z, Hn).call(this);
    }, Os));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Ji(t, s(this, zr), s(this, jr));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!s(this, qe).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(t, r) {
    W(this, Z, Yn).call(this, t, r), L(this, Zt, s(this, Zt) + t), !(!s(this, At) || s(this, _r)) && (L(this, _r, !0), ur(() => {
      L(this, _r, !1), s(this, At) && mr(s(this, At), s(this, Zt));
    }));
  }
  get_effect_pending() {
    return s(this, un).call(this), u(
      /** @type {Source<number>} */
      s(this, At)
    );
  }
  /** @param {unknown} error */
  error(t) {
    if (!s(this, qe).onerror && !s(this, qe).failed)
      throw t;
    P?.is_fork ? (s(this, He) && P.skip_effect(s(this, He)), s(this, Te) && P.skip_effect(s(this, Te)), s(this, Be) && P.skip_effect(s(this, Be)), P.on_fork_commit(() => {
      W(this, Z, Kn).call(this, t);
    })) : W(this, Z, Kn).call(this, t);
  }
}
Ve = new WeakMap(), Xn = new WeakMap(), qe = new WeakMap(), Xt = new WeakMap(), Re = new WeakMap(), He = new WeakMap(), Te = new WeakMap(), Be = new WeakMap(), Tt = new WeakMap(), Zt = new WeakMap(), Dt = new WeakMap(), _r = new WeakMap(), zr = new WeakMap(), jr = new WeakMap(), At = new WeakMap(), un = new WeakMap(), Z = new WeakSet(), Bs = function() {
  try {
    L(this, He, Ke(() => s(this, Xt).call(this, s(this, Ve))));
  } catch (t) {
    this.error(t);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
Us = function(t) {
  const r = s(this, qe).failed;
  r && L(this, Be, Ke(() => {
    r(
      s(this, Ve),
      () => t,
      () => () => {
      }
    );
  }));
}, zs = function() {
  const t = s(this, qe).pending;
  t && (this.is_pending = !0, L(this, Te, Ke(() => t(s(this, Ve)))), ur(() => {
    var r = L(this, Tt, document.createDocumentFragment()), n = zt();
    r.append(n), L(this, He, W(this, Z, sn).call(this, () => Ke(() => s(this, Xt).call(this, n)))), s(this, Dt) === 0 && (s(this, Ve).before(r), L(this, Tt, null), tr(
      /** @type {Effect} */
      s(this, Te),
      () => {
        L(this, Te, null);
      }
    ), W(this, Z, an).call(
      this,
      /** @type {Batch} */
      P
    ));
  }));
}, Hn = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), L(this, Dt, 0), L(this, Zt, 0), L(this, He, Ke(() => {
      s(this, Xt).call(this, s(this, Ve));
    })), s(this, Dt) > 0) {
      var t = L(this, Tt, document.createDocumentFragment());
      li(s(this, He), t);
      const r = (
        /** @type {(anchor: Node) => void} */
        s(this, qe).pending
      );
      L(this, Te, Ke(() => r(s(this, Ve))));
    } else
      W(this, Z, an).call(
        this,
        /** @type {Batch} */
        P
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
an = function(t) {
  this.is_pending = !1, t.transfer_effects(s(this, zr), s(this, jr));
}, /**
 * @template T
 * @param {() => T} fn
 */
sn = function(t) {
  var r = B, n = z, i = ze;
  pt(s(this, Re)), Qe(s(this, Re)), br(s(this, Re).ctx);
  try {
    return ir.ensure(), t();
  } catch (a) {
    return Yi(a), null;
  } finally {
    pt(r), Qe(n), br(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
Yn = function(t, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && W(n = this.parent, Z, Yn).call(n, t, r);
    return;
  }
  L(this, Dt, s(this, Dt) + t), s(this, Dt) === 0 && (W(this, Z, an).call(this, r), s(this, Te) && tr(s(this, Te), () => {
    L(this, Te, null);
  }), s(this, Tt) && (s(this, Ve).before(s(this, Tt)), L(this, Tt, null)));
}, /**
 * @param {unknown} error
 */
Kn = function(t) {
  s(this, He) && (Ne(s(this, He)), L(this, He, null)), s(this, Te) && (Ne(s(this, Te)), L(this, Te, null)), s(this, Be) && (Ne(s(this, Be)), L(this, Be, null));
  var r = s(this, qe).onerror;
  let n = s(this, qe).failed;
  var i = !1, a = !1;
  const c = () => {
    if (i) {
      Ts();
      return;
    }
    i = !0, a && _s(), s(this, Be) !== null && tr(s(this, Be), () => {
      L(this, Be, null);
    }), W(this, Z, sn).call(this, () => {
      W(this, Z, Hn).call(this);
    });
  }, o = (l) => {
    try {
      a = !0, r?.(l, c), a = !1;
    } catch (f) {
      Lt(f, s(this, Re) && s(this, Re).parent);
    }
    n && L(this, Be, W(this, Z, sn).call(this, () => {
      try {
        return Ke(() => {
          var f = (
            /** @type {Effect} */
            B
          );
          f.b = this, f.f |= Un, n(
            s(this, Ve),
            () => l,
            () => c
          );
        });
      } catch (f) {
        return Lt(
          f,
          /** @type {Effect} */
          s(this, Re).parent
        ), null;
      }
    }));
  };
  ur(() => {
    var l;
    try {
      l = this.transform_error(t);
    } catch (f) {
      Lt(f, s(this, Re) && s(this, Re).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (f) => Lt(f, s(this, Re) && s(this, Re).parent)
    ) : o(l);
  });
};
function js(e, t, r, n) {
  const i = ti;
  var a = e.filter((b) => !b.settled);
  if (r.length === 0 && a.length === 0) {
    n(t.map(i));
    return;
  }
  var c = (
    /** @type {Effect} */
    B
  ), o = Vs(), l = a.length === 1 ? a[0].promise : a.length > 1 ? Promise.all(a.map((b) => b.promise)) : null;
  function f(b) {
    o();
    try {
      n(b);
    } catch (x) {
      (c.f & Ge) === 0 && Lt(x, c);
    }
    fn();
  }
  if (r.length === 0) {
    l.then(() => f(t.map(i)));
    return;
  }
  var p = Zi();
  function m() {
    Promise.all(r.map((b) => /* @__PURE__ */ qs(b))).then((b) => f([...t.map(i), ...b])).catch((b) => Lt(b, c)).finally(() => p());
  }
  l ? l.then(() => {
    o(), m(), fn();
  }) : m();
}
function Vs() {
  var e = (
    /** @type {Effect} */
    B
  ), t = z, r = ze, n = (
    /** @type {Batch} */
    P
  );
  return function(a = !0) {
    pt(e), Qe(t), br(r), a && (e.f & Ge) === 0 && (n?.activate(), n?.apply());
  };
}
function fn(e = !0) {
  pt(null), Qe(null), br(null), e && P?.deactivate();
}
function Zi() {
  var e = (
    /** @type {Effect} */
    B
  ), t = (
    /** @type {Boundary} */
    e.b
  ), r = (
    /** @type {Batch} */
    P
  ), n = t.is_rendered();
  return t.update_pending_count(1, r), r.increment(n, e), (i = !1) => {
    t.update_pending_count(-1, r), r.decrement(n, e, i);
  };
}
// @__NO_SIDE_EFFECTS__
function ti(e) {
  var t = we | ke;
  return B !== null && (B.f |= wr), {
    ctx: ze,
    deps: null,
    effects: null,
    equals: Ui,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ce
    ),
    wv: 0,
    parent: B,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function qs(e, t, r) {
  let n = (
    /** @type {Effect | null} */
    B
  );
  n === null && os();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = ar(
    /** @type {V} */
    ce
  ), c = !z, o = /* @__PURE__ */ new Map();
  return io(() => {
    var l = (
      /** @type {Effect} */
      B
    ), f = Li();
    i = f.promise;
    try {
      Promise.resolve(e()).then(f.resolve, f.reject).finally(fn);
    } catch (x) {
      f.reject(x), fn();
    }
    var p = (
      /** @type {Batch} */
      P
    );
    if (c) {
      if ((l.f & sr) !== 0)
        var m = Zi();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(p)?.reject(wt), o.delete(p);
      else {
        for (const x of o.values())
          x.reject(wt);
        o.clear();
      }
      o.set(p, f);
    }
    const b = (x, v = void 0) => {
      if (m) {
        var C = v === wt;
        m(C);
      }
      if (!(v === wt || (l.f & Ge) !== 0)) {
        if (p.activate(), v)
          a.f |= Ut, mr(a, v);
        else {
          (a.f & Ut) !== 0 && (a.f ^= Ut), mr(a, x);
          for (const [M, K] of o) {
            if (o.delete(M), M === p) break;
            K.reject(wt);
          }
        }
        p.deactivate();
      }
    };
    f.promise.then(b, (x) => b(null, x || "unknown"));
  }), eo(() => {
    for (const l of o.values())
      l.reject(wt);
  }), new Promise((l) => {
    function f(p) {
      function m() {
        p === i ? l(a) : f(i);
      }
      p.then(m, m);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = /* @__PURE__ */ ti(e);
  return ga(t), t;
}
// @__NO_SIDE_EFFECTS__
function Hs(e) {
  const t = /* @__PURE__ */ ti(e);
  return t.equals = zi, t;
}
function Ys(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var r = 0; r < t.length; r += 1)
      Ne(
        /** @type {Effect} */
        t[r]
      );
  }
}
function ri(e) {
  var t, r = B, n = e.parent;
  if (!Vt && n !== null && (n.f & (Ge | Ae)) !== 0)
    return Ss(), e.v;
  pt(n);
  try {
    e.f &= ~nr, Ys(e), t = ya(e);
  } finally {
    pt(r);
  }
  return t;
}
function $i(e) {
  var t = ri(e);
  if (!e.equals(t) && (e.wv = pa(), (!P?.is_fork || e.deps === null) && (P !== null ? P.capture(e, t, !0) : e.v = t, e.deps === null))) {
    ee(e, le);
    return;
  }
  Vt || (at !== null ? (ii() || P?.is_fork) && at.set(e, t) : Zn(e));
}
function Ks(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      (t.teardown || t.ac) && (t.teardown?.(), t.ac?.abort(wt), t.teardown = ns, t.ac = null, Dr(t, 0), si(t));
}
function ea(e) {
  if (e.effects !== null)
    for (const t of e.effects)
      t.teardown && kr(t);
}
let Jn = /* @__PURE__ */ new Set();
const er = /* @__PURE__ */ new Map();
let ta = !1;
function ar(e, t) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Ui,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  const r = ar(e);
  return ga(r), r;
}
// @__NO_SIDE_EFFECTS__
function Js(e, t = !1, r = !0) {
  const n = ar(e);
  return t || (n.equals = zi), n;
}
function A(e, t, r = !1) {
  z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!st || (z.f & jn) !== 0) && qi() && (z.f & (we | gt | Or | jn)) !== 0 && (We === null || !pr.call(We, e)) && gs();
  let n = r ? Ye(t) : t;
  return mr(e, n, en);
}
function mr(e, t, r = null) {
  if (!e.equals(t)) {
    er.set(e, Vt ? t : e.v);
    var n = ir.ensure();
    if (n.capture(e, t), (e.f & we) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & ke) !== 0 && ri(i), at === null && Zn(i);
    }
    e.wv = pa(), ra(e, ke, r), B !== null && (B.f & le) !== 0 && (B.f & (ot | jt)) === 0 && (je === null ? so([e]) : je.push(e)), !n.is_fork && Jn.size > 0 && !ta && Gs();
  }
  return t;
}
function Gs() {
  ta = !1;
  for (const e of Jn)
    (e.f & le) !== 0 && ee(e, _t), Yr(e) && kr(e);
  Jn.clear();
}
function Pr(e) {
  A(e, e.v + 1);
}
function ra(e, t, r) {
  var n = e.reactions;
  if (n !== null)
    for (var i = n.length, a = 0; a < i; a++) {
      var c = n[a], o = c.f, l = (o & ke) === 0;
      if (l && ee(c, t), (o & we) !== 0) {
        var f = (
          /** @type {Derived} */
          c
        );
        at?.delete(f), (o & nr) === 0 && (o & Je && (B === null || (B.f & ln) === 0) && (c.f |= nr), ra(f, _t, r));
      } else if (l) {
        var p = (
          /** @type {Effect} */
          c
        );
        (o & gt) !== 0 && kt !== null && kt.add(p), r !== null ? r.push(p) : ei(p);
      }
    }
}
function Ye(e) {
  if (typeof e != "object" || e === null || $r in e)
    return e;
  const t = rs(e);
  if (t !== es && t !== ts)
    return e;
  var r = /* @__PURE__ */ new Map(), n = Di(e), i = /* @__PURE__ */ J(0), a = rr, c = (o) => {
    if (rr === a)
      return o();
    var l = z, f = rr;
    Qe(null), Ii(a);
    var p = o();
    return Qe(l), Ii(f), p;
  };
  return n && r.set("length", /* @__PURE__ */ J(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(o, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && vs();
        var p = r.get(l);
        return p === void 0 ? c(() => {
          var m = /* @__PURE__ */ J(f.value);
          return r.set(l, m), m;
        }) : A(p, f.value, !0), !0;
      },
      deleteProperty(o, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in o) {
            const p = c(() => /* @__PURE__ */ J(ce));
            r.set(l, p), Pr(i);
          }
        } else
          A(f, ce), Pr(i);
        return !0;
      },
      get(o, l, f) {
        if (l === $r)
          return e;
        var p = r.get(l), m = l in o;
        if (p === void 0 && (!m || Nr(o, l)?.writable) && (p = c(() => {
          var x = Ye(m ? o[l] : ce), v = /* @__PURE__ */ J(x);
          return v;
        }), r.set(l, p)), p !== void 0) {
          var b = u(p);
          return b === ce ? void 0 : b;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && "value" in f) {
          var p = r.get(l);
          p && (f.value = u(p));
        } else if (f === void 0) {
          var m = r.get(l), b = m?.v;
          if (m !== void 0 && b !== ce)
            return {
              enumerable: !0,
              configurable: !0,
              value: b,
              writable: !0
            };
        }
        return f;
      },
      has(o, l) {
        if (l === $r)
          return !0;
        var f = r.get(l), p = f !== void 0 && f.v !== ce || Reflect.has(o, l);
        if (f !== void 0 || B !== null && (!p || Nr(o, l)?.writable)) {
          f === void 0 && (f = c(() => {
            var b = p ? Ye(o[l]) : ce, x = /* @__PURE__ */ J(b);
            return x;
          }), r.set(l, f));
          var m = u(f);
          if (m === ce)
            return !1;
        }
        return p;
      },
      set(o, l, f, p) {
        var m = r.get(l), b = l in o;
        if (n && l === "length")
          for (var x = f; x < /** @type {Source<number>} */
          m.v; x += 1) {
            var v = r.get(x + "");
            v !== void 0 ? A(v, ce) : x in o && (v = c(() => /* @__PURE__ */ J(ce)), r.set(x + "", v));
          }
        if (m === void 0)
          (!b || Nr(o, l)?.writable) && (m = c(() => /* @__PURE__ */ J(void 0)), A(m, Ye(f)), r.set(l, m));
        else {
          b = m.v !== ce;
          var C = c(() => Ye(f));
          A(m, C);
        }
        var M = Reflect.getOwnPropertyDescriptor(o, l);
        if (M?.set && M.set.call(p, f), !b) {
          if (n && typeof l == "string") {
            var K = (
              /** @type {Source<number>} */
              r.get("length")
            ), U = Number(l);
            Number.isInteger(U) && U >= K.v && A(K, U + 1);
          }
          Pr(i);
        }
        return !0;
      },
      ownKeys(o) {
        u(i);
        var l = Reflect.ownKeys(o).filter((m) => {
          var b = r.get(m);
          return b === void 0 || b.v !== ce;
        });
        for (var [f, p] of r)
          p.v !== ce && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        hs();
      }
    }
  );
}
var Ti, na, ia, aa;
function Ws() {
  if (Ti === void 0) {
    Ti = window, na = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, r = Text.prototype;
    ia = Nr(t, "firstChild").get, aa = Nr(t, "nextSibling").get, wi(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), wi(r) && (r.__t = void 0);
  }
}
function zt(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Bt(e) {
  return (
    /** @type {TemplateNode | null} */
    ia.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Hr(e) {
  return (
    /** @type {TemplateNode | null} */
    aa.call(e)
  );
}
function w(e, t) {
  return /* @__PURE__ */ Bt(e);
}
function Xr(e, t = !1) {
  {
    var r = /* @__PURE__ */ Bt(e);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ Hr(r) : r;
  }
}
function E(e, t = 1, r = !1) {
  let n = e;
  for (; t--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ Hr(n);
  return n;
}
function Qs(e) {
  e.textContent = "";
}
function sa() {
  return !1;
}
function oa(e, t, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(t ?? ks, e, void 0)
  );
}
let Ai = !1;
function Xs() {
  Ai || (Ai = !0, document.addEventListener(
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
function ni(e) {
  var t = z, r = B;
  Qe(null), pt(null);
  try {
    return e();
  } finally {
    Qe(t), pt(r);
  }
}
function la(e, t, r, n = r) {
  e.addEventListener(t, () => ni(r));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), n(!0);
  } : e.__on_r = () => n(!0), Xs();
}
function Zs(e) {
  B === null && (z === null && us(), ds()), Vt && fs();
}
function $s(e, t) {
  var r = t.last;
  r === null ? t.last = t.first = e : (r.next = e, e.prev = r, t.last = e);
}
function It(e, t) {
  var r = B;
  r !== null && (r.f & Ae) !== 0 && (e |= Ae);
  var n = {
    ctx: ze,
    deps: null,
    nodes: null,
    f: e | ke | Je,
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
  P?.register_created_effect(n);
  var i = n;
  if ((e & xr) !== 0)
    dr !== null ? dr.push(n) : ir.ensure().schedule(n);
  else if (t !== null) {
    try {
      kr(n);
    } catch (c) {
      throw Ne(n), c;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & wr) === 0 && (i = i.first, (e & gt) !== 0 && (e & yr) !== 0 && i !== null && (i.f |= yr));
  }
  if (i !== null && (i.parent = r, r !== null && $s(i, r), z !== null && (z.f & we) !== 0 && (e & jt) === 0)) {
    var a = (
      /** @type {Derived} */
      z
    );
    (a.effects ?? (a.effects = [])).push(i);
  }
  return n;
}
function ii() {
  return z !== null && !st;
}
function eo(e) {
  const t = It(hn, null);
  return ee(t, le), t.teardown = e, t;
}
function to(e) {
  Zs();
  var t = (
    /** @type {Effect} */
    B.f
  ), r = !z && (t & ot) !== 0 && (t & sr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      ze
    );
    (n.e ?? (n.e = [])).push(e);
  } else
    return fa(e);
}
function fa(e) {
  return It(xr | ss, e);
}
function ro(e) {
  ir.ensure();
  const t = It(jt | wr, e);
  return (r = {}) => new Promise((n) => {
    r.outro ? tr(t, () => {
      Ne(t), n(void 0);
    }) : (Ne(t), n(void 0));
  });
}
function no(e) {
  return It(xr, e);
}
function io(e) {
  return It(Or | wr, e);
}
function gn(e, t = 0) {
  return It(hn | t, e);
}
function D(e, t = [], r = [], n = []) {
  js(n, t, r, (i) => {
    It(hn, () => e(...i.map(u)));
  });
}
function ai(e, t = 0) {
  var r = It(gt | t, e);
  return r;
}
function Ke(e) {
  return It(ot | wr, e);
}
function da(e) {
  var t = e.teardown;
  if (t !== null) {
    const r = Vt, n = z;
    Ci(!0), Qe(null);
    try {
      t.call(null);
    } finally {
      Ci(r), Qe(n);
    }
  }
}
function si(e, t = !1) {
  var r = e.first;
  for (e.first = e.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && ni(() => {
      i.abort(wt);
    });
    var n = r.next;
    (r.f & jt) !== 0 ? r.parent = null : Ne(r, t), r = n;
  }
}
function ao(e) {
  for (var t = e.first; t !== null; ) {
    var r = t.next;
    (t.f & ot) === 0 && Ne(t), t = r;
  }
}
function Ne(e, t = !0) {
  var r = !1;
  (t || (e.f & as) !== 0) && e.nodes !== null && e.nodes.end !== null && (ua(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), r = !0), ee(e, zn), si(e, t && !r), Dr(e, 0);
  var n = e.nodes && e.nodes.t;
  if (n !== null)
    for (const a of n)
      a.stop();
  da(e), e.f ^= zn, e.f |= Ge;
  var i = e.parent;
  i !== null && i.first !== null && ca(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = e.b = null;
}
function ua(e, t) {
  for (; e !== null; ) {
    var r = e === t ? null : /* @__PURE__ */ Hr(e);
    e.remove(), e = r;
  }
}
function ca(e) {
  var t = e.parent, r = e.prev, n = e.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), t !== null && (t.first === e && (t.first = n), t.last === e && (t.last = r));
}
function tr(e, t, r = !0) {
  var n = [];
  va(e, n, !0);
  var i = () => {
    r && Ne(e), t && t();
  }, a = n.length;
  if (a > 0) {
    var c = () => --a || i();
    for (var o of n)
      o.out(c);
  } else
    i();
}
function va(e, t, r) {
  if ((e.f & Ae) === 0) {
    e.f ^= Ae;
    var n = e.nodes && e.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && t.push(o);
    for (var i = e.first; i !== null; ) {
      var a = i.next;
      if ((i.f & jt) === 0) {
        var c = (i.f & yr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ot) !== 0 && (e.f & gt) !== 0;
        va(i, t, c ? r : !1);
      }
      i = a;
    }
  }
}
function oi(e) {
  ha(e, !0);
}
function ha(e, t) {
  if ((e.f & Ae) !== 0) {
    e.f ^= Ae, (e.f & le) === 0 && (ee(e, ke), ir.ensure().schedule(e));
    for (var r = e.first; r !== null; ) {
      var n = r.next, i = (r.f & yr) !== 0 || (r.f & ot) !== 0;
      ha(r, i ? t : !1), r = n;
    }
    var a = e.nodes && e.nodes.t;
    if (a !== null)
      for (const c of a)
        (c.is_global || t) && c.in();
  }
}
function li(e, t) {
  if (e.nodes)
    for (var r = e.nodes.start, n = e.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ Hr(r);
      t.append(r), r = i;
    }
}
let on = !1, Vt = !1;
function Ci(e) {
  Vt = e;
}
let z = null, st = !1;
function Qe(e) {
  z = e;
}
let B = null;
function pt(e) {
  B = e;
}
let We = null;
function ga(e) {
  z !== null && (We === null ? We = [e] : We.push(e));
}
let Me = null, De = 0, je = null;
function so(e) {
  je = e;
}
let _a = 1, Jt = 0, rr = Jt;
function Ii(e) {
  rr = e;
}
function pa() {
  return ++_a;
}
function Yr(e) {
  var t = e.f;
  if ((t & ke) !== 0)
    return !0;
  if (t & we && (e.f &= ~nr), (t & _t) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      e.deps
    ), n = r.length, i = 0; i < n; i++) {
      var a = r[i];
      if (Yr(
        /** @type {Derived} */
        a
      ) && $i(
        /** @type {Derived} */
        a
      ), a.wv > e.wv)
        return !0;
    }
    (t & Je) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    at === null && ee(e, le);
  }
  return !1;
}
function xa(e, t, r = !0) {
  var n = e.reactions;
  if (n !== null && !(We !== null && pr.call(We, e)))
    for (var i = 0; i < n.length; i++) {
      var a = n[i];
      (a.f & we) !== 0 ? xa(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (r ? ee(a, ke) : (a.f & le) !== 0 && ee(a, _t), ei(
        /** @type {Effect} */
        a
      ));
    }
}
function ya(e) {
  var C;
  var t = Me, r = De, n = je, i = z, a = We, c = ze, o = st, l = rr, f = e.f;
  Me = /** @type {null | Value[]} */
  null, De = 0, je = null, z = (f & (ot | jt)) === 0 ? e : null, We = null, br(e.ctx), st = !1, rr = ++Jt, e.ac !== null && (ni(() => {
    e.ac.abort(wt);
  }), e.ac = null);
  try {
    e.f |= ln;
    var p = (
      /** @type {Function} */
      e.fn
    ), m = p();
    e.f |= sr;
    var b = e.deps, x = P?.is_fork;
    if (Me !== null) {
      var v;
      if (x || Dr(e, De), b !== null && De > 0)
        for (b.length = De + Me.length, v = 0; v < Me.length; v++)
          b[De + v] = Me[v];
      else
        e.deps = b = Me;
      if (ii() && (e.f & Je) !== 0)
        for (v = De; v < b.length; v++)
          ((C = b[v]).reactions ?? (C.reactions = [])).push(e);
    } else !x && b !== null && De < b.length && (Dr(e, De), b.length = De);
    if (qi() && je !== null && !st && b !== null && (e.f & (we | _t | ke)) === 0)
      for (v = 0; v < /** @type {Source[]} */
      je.length; v++)
        xa(
          je[v],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (Jt++, i.deps !== null)
        for (let M = 0; M < r; M += 1)
          i.deps[M].rv = Jt;
      if (t !== null)
        for (const M of t)
          M.rv = Jt;
      je !== null && (n === null ? n = je : n.push(.../** @type {Source[]} */
      je));
    }
    return (e.f & Ut) !== 0 && (e.f ^= Ut), m;
  } catch (M) {
    return Yi(M);
  } finally {
    e.f ^= ln, Me = t, De = r, je = n, z = i, We = a, br(c), st = o, rr = l;
  }
}
function oo(e, t) {
  let r = t.reactions;
  if (r !== null) {
    var n = Za.call(r, e);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = t.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (t.f & we) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Me === null || !pr.call(Me, t))) {
    var a = (
      /** @type {Derived} */
      t
    );
    (a.f & Je) !== 0 && (a.f ^= Je, a.f &= ~nr), a.v !== ce && Zn(a), Ks(a), Dr(a, 0);
  }
}
function Dr(e, t) {
  var r = e.deps;
  if (r !== null)
    for (var n = t; n < r.length; n++)
      oo(e, r[n]);
}
function kr(e) {
  var t = e.f;
  if ((t & Ge) === 0) {
    ee(e, le);
    var r = B, n = on;
    B = e, on = !0;
    try {
      (t & (gt | Bi)) !== 0 ? ao(e) : si(e), da(e);
      var i = ya(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = _a;
      var a;
    } finally {
      on = n, B = r;
    }
  }
}
async function lo() {
  await Promise.resolve(), Ns();
}
function u(e) {
  var t = e.f, r = (t & we) !== 0;
  if (z !== null && !st) {
    var n = B !== null && (B.f & Ge) !== 0;
    if (!n && (We === null || !pr.call(We, e))) {
      var i = z.deps;
      if ((z.f & ln) !== 0)
        e.rv < Jt && (e.rv = Jt, Me === null && i !== null && i[De] === e ? De++ : Me === null ? Me = [e] : Me.push(e));
      else {
        (z.deps ?? (z.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [z] : pr.call(a, z) || a.push(z);
      }
    }
  }
  if (Vt && er.has(e))
    return er.get(e);
  if (r) {
    var c = (
      /** @type {Derived} */
      e
    );
    if (Vt) {
      var o = c.v;
      return ((c.f & le) === 0 && c.reactions !== null || ma(c)) && (o = ri(c)), er.set(c, o), o;
    }
    var l = (c.f & Je) === 0 && !st && z !== null && (on || (z.f & Je) !== 0), f = (c.f & sr) === 0;
    Yr(c) && (l && (c.f |= Je), $i(c)), l && !f && (ea(c), ba(c));
  }
  if (at?.has(e))
    return at.get(e);
  if ((e.f & Ut) !== 0)
    throw e.v;
  return e.v;
}
function ba(e) {
  if (e.f |= Je, e.deps !== null)
    for (const t of e.deps)
      (t.reactions ?? (t.reactions = [])).push(e), (t.f & we) !== 0 && (t.f & Je) === 0 && (ea(
        /** @type {Derived} */
        t
      ), ba(
        /** @type {Derived} */
        t
      ));
}
function ma(e) {
  if (e.v === ce) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (er.has(t) || (t.f & we) !== 0 && ma(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function _n(e) {
  var t = st;
  try {
    return st = !0, e();
  } finally {
    st = t;
  }
}
const fo = ["touchstart", "touchmove"];
function uo(e) {
  return fo.includes(e);
}
const Gt = Symbol("events"), ka = /* @__PURE__ */ new Set(), Gn = /* @__PURE__ */ new Set();
function Ie(e, t, r) {
  (t[Gt] ?? (t[Gt] = {}))[e] = r;
}
function co(e) {
  for (var t = 0; t < e.length; t++)
    ka.add(e[t]);
  for (var r of Gn)
    r(e);
}
let Ri = null;
function Mi(e) {
  var t = this, r = (
    /** @type {Node} */
    t.ownerDocument
  ), n = e.type, i = e.composedPath?.() || [], a = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  Ri = e;
  var c = 0, o = Ri === e && e[Gt];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e[Gt] = t;
      return;
    }
    var f = i.indexOf(t);
    if (f === -1)
      return;
    l <= f && (c = l);
  }
  if (a = /** @type {Element} */
  i[c] || e.target, a !== t) {
    $a(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || r;
      }
    });
    var p = z, m = B;
    Qe(null), pt(null);
    try {
      for (var b, x = []; a !== null; ) {
        var v = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var C = a[Gt]?.[n];
          C != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a) && C.call(a, e);
        } catch (M) {
          b ? x.push(M) : b = M;
        }
        if (e.cancelBubble || v === t || v === null)
          break;
        a = v;
      }
      if (b) {
        for (let M of x)
          queueMicrotask(() => {
            throw M;
          });
        throw b;
      }
    } finally {
      e[Gt] = t, delete e.currentTarget, Qe(p), pt(m);
    }
  }
}
const vo = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (e) => e
  })
);
function ho(e) {
  return (
    /** @type {string} */
    vo?.createHTML(e) ?? e
  );
}
function go(e) {
  var t = oa("template");
  return t.innerHTML = ho(e.replaceAll("<!>", "<!---->")), t.content;
}
function Lr(e, t) {
  var r = (
    /** @type {Effect} */
    B
  );
  r.nodes === null && (r.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function O(e, t) {
  var r = (t & bs) !== 0, n = (t & ms) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = go(a ? e : "<!>" + e), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Bt(i)));
    var c = (
      /** @type {TemplateNode} */
      n || na ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Bt(c)
      ), l = (
        /** @type {TemplateNode} */
        c.lastChild
      );
      Lr(o, l);
    } else
      Lr(c, c);
    return c;
  };
}
function _o(e = "") {
  {
    var t = zt(e + "");
    return Lr(t, t), t;
  }
}
function F(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Q(e, t) {
  var r = t == null ? "" : typeof t == "object" ? `${t}` : t;
  r !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = r, e.nodeValue = `${r}`);
}
function po(e, t) {
  return xo(e, t);
}
const Zr = /* @__PURE__ */ new Map();
function xo(e, { target: t, anchor: r, props: n = {}, events: i, context: a, intro: c = !0, transformError: o }) {
  Ws();
  var l = void 0, f = ro(() => {
    var p = r ?? t.appendChild(zt());
    Ds(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (x) => {
        ji({});
        var v = (
          /** @type {ComponentContext} */
          ze
        );
        a && (v.c = a), i && (n.$$events = i), l = e(x, n) || {}, Vi();
      },
      o
    );
    var m = /* @__PURE__ */ new Set(), b = (x) => {
      for (var v = 0; v < x.length; v++) {
        var C = x[v];
        if (!m.has(C)) {
          m.add(C);
          var M = uo(C);
          for (const ge of [t, document]) {
            var K = Zr.get(ge);
            K === void 0 && (K = /* @__PURE__ */ new Map(), Zr.set(ge, K));
            var U = K.get(C);
            U === void 0 ? (ge.addEventListener(C, Mi, { passive: M }), K.set(C, 1)) : K.set(C, U + 1);
          }
        }
      }
    };
    return b(vn(ka)), Gn.add(b), () => {
      for (var x of m)
        for (const M of [t, document]) {
          var v = (
            /** @type {Map<string, number>} */
            Zr.get(M)
          ), C = (
            /** @type {number} */
            v.get(x)
          );
          --C == 0 ? (M.removeEventListener(x, Mi), v.delete(x), v.size === 0 && Zr.delete(M)) : v.set(x, C);
        }
      Gn.delete(b), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return Wn.set(l, f), l;
}
let Wn = /* @__PURE__ */ new WeakMap();
function yo(e, t) {
  const r = Wn.get(e);
  return r ? (Wn.delete(e), r(t)) : Promise.resolve();
}
var it, ht, Ue, $t, Vr, qr, cn;
class bo {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, r = !0) {
    /** @type {TemplateNode} */
    rt(this, "anchor");
    /** @type {Map<Batch, Key>} */
    R(this, it, /* @__PURE__ */ new Map());
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
    R(this, ht, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    R(this, Ue, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    R(this, $t, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    R(this, Vr, !0);
    /**
     * @param {Batch} batch
     */
    R(this, qr, (t) => {
      if (s(this, it).has(t)) {
        var r = (
          /** @type {Key} */
          s(this, it).get(t)
        ), n = s(this, ht).get(r);
        if (n)
          oi(n), s(this, $t).delete(r);
        else {
          var i = s(this, Ue).get(r);
          i && (s(this, ht).set(r, i.effect), s(this, Ue).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [a, c] of s(this, it)) {
          if (s(this, it).delete(a), a === t)
            break;
          const o = s(this, Ue).get(c);
          o && (Ne(o.effect), s(this, Ue).delete(c));
        }
        for (const [a, c] of s(this, ht)) {
          if (a === r || s(this, $t).has(a)) continue;
          const o = () => {
            if (Array.from(s(this, it).values()).includes(a)) {
              var f = document.createDocumentFragment();
              li(c, f), f.append(zt()), s(this, Ue).set(a, { effect: c, fragment: f });
            } else
              Ne(c);
            s(this, $t).delete(a), s(this, ht).delete(a);
          };
          s(this, Vr) || !n ? (s(this, $t).add(a), tr(c, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    R(this, cn, (t) => {
      s(this, it).delete(t);
      const r = Array.from(s(this, it).values());
      for (const [n, i] of s(this, Ue))
        r.includes(n) || (Ne(i.effect), s(this, Ue).delete(n));
    });
    this.anchor = t, L(this, Vr, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, r) {
    var n = (
      /** @type {Batch} */
      P
    ), i = sa();
    if (r && !s(this, ht).has(t) && !s(this, Ue).has(t))
      if (i) {
        var a = document.createDocumentFragment(), c = zt();
        a.append(c), s(this, Ue).set(t, {
          effect: Ke(() => r(c)),
          fragment: a
        });
      } else
        s(this, ht).set(
          t,
          Ke(() => r(this.anchor))
        );
    if (s(this, it).set(n, t), i) {
      for (const [o, l] of s(this, ht))
        o === t ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of s(this, Ue))
        o === t ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(s(this, qr)), n.ondiscard(s(this, cn));
    } else
      s(this, qr).call(this, n);
  }
}
it = new WeakMap(), ht = new WeakMap(), Ue = new WeakMap(), $t = new WeakMap(), Vr = new WeakMap(), qr = new WeakMap(), cn = new WeakMap();
function ue(e, t, r = !1) {
  var n = new bo(e), i = r ? yr : 0;
  function a(c, o) {
    n.ensure(c, o);
  }
  ai(() => {
    var c = !1;
    t((o, l = 0) => {
      c = !0, a(l, o);
    }), c || a(-1, null);
  }, i);
}
function Ni(e, t) {
  return t;
}
function mo(e, t, r) {
  for (var n = [], i = t.length, a, c = t.length, o = 0; o < i; o++) {
    let m = t[o];
    tr(
      m,
      () => {
        if (a) {
          if (a.pending.delete(m), a.done.add(m), a.pending.size === 0) {
            var b = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Qn(e, vn(a.done)), b.delete(a), b.size === 0 && (e.outrogroups = null);
          }
        } else
          c -= 1;
      },
      !1
    );
  }
  if (c === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        f.parentNode
      );
      Qs(p), p.append(f), e.items.clear();
    }
    Qn(e, t, !l);
  } else
    a = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ?? (e.outrogroups = /* @__PURE__ */ new Set())).add(a);
}
function Qn(e, t, r = !0) {
  var n;
  if (e.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const c of e.pending.values())
      for (const o of c)
        n.add(
          /** @type {EachItem} */
          e.items.get(o).e
        );
  }
  for (var i = 0; i < t.length; i++) {
    var a = t[i];
    if (n?.has(a)) {
      a.f |= Ct;
      const c = document.createDocumentFragment();
      li(a, c);
    } else
      Ne(t[i], r);
  }
}
var Fi;
function Ir(e, t, r, n, i, a = null) {
  var c = e, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      e
    );
    c = l.appendChild(zt());
  }
  var f = null, p = /* @__PURE__ */ Hs(() => {
    var U = r();
    return Di(U) ? U : U == null ? [] : vn(U);
  }), m, b = /* @__PURE__ */ new Map(), x = !0;
  function v(U) {
    (K.effect.f & Ge) === 0 && (K.pending.delete(U), K.fallback = f, ko(K, m, c, t, n), f !== null && (m.length === 0 ? (f.f & Ct) === 0 ? oi(f) : (f.f ^= Ct, Mr(f, null, c)) : tr(f, () => {
      f = null;
    })));
  }
  function C(U) {
    K.pending.delete(U);
  }
  var M = ai(() => {
    m = /** @type {V[]} */
    u(p);
    for (var U = m.length, ge = /* @__PURE__ */ new Set(), _e = (
      /** @type {Batch} */
      P
    ), Ce = sa(), Ee = 0; Ee < U; Ee += 1) {
      var qt = m[Ee], ae = n(qt, Ee), fe = x ? null : o.get(ae);
      fe ? (fe.v && mr(fe.v, qt), fe.i && mr(fe.i, Ee), Ce && _e.unskip_effect(fe.e)) : (fe = wo(
        o,
        x ? c : Fi ?? (Fi = zt()),
        qt,
        ae,
        Ee,
        i,
        t,
        r
      ), x || (fe.e.f |= Ct), o.set(ae, fe)), ge.add(ae);
    }
    if (U === 0 && a && !f && (x ? f = Ke(() => a(c)) : (f = Ke(() => a(Fi ?? (Fi = zt()))), f.f |= Ct)), U > ge.size && ls(), !x)
      if (b.set(_e, ge), Ce) {
        for (const [Xe, Er] of o)
          ge.has(Xe) || _e.skip_effect(Er.e);
        _e.oncommit(v), _e.ondiscard(C);
      } else
        v(_e);
    u(p);
  }), K = { effect: M, items: o, pending: b, outrogroups: null, fallback: f };
  x = !1;
}
function Rr(e) {
  for (; e !== null && (e.f & ot) === 0; )
    e = e.next;
  return e;
}
function ko(e, t, r, n, i) {
  var a = t.length, c = e.items, o = Rr(e.effect.first), l, f = null, p = [], m = [], b, x, v, C;
  for (C = 0; C < a; C += 1) {
    if (b = t[C], x = i(b, C), v = /** @type {EachItem} */
    c.get(x).e, e.outrogroups !== null)
      for (const ae of e.outrogroups)
        ae.pending.delete(v), ae.done.delete(v);
    if ((v.f & Ae) !== 0 && oi(v), (v.f & Ct) !== 0)
      if (v.f ^= Ct, v === o)
        Mr(v, null, r);
      else {
        var M = f ? f.next : o;
        v === e.effect.last && (e.effect.last = v.prev), v.prev && (v.prev.next = v.next), v.next && (v.next.prev = v.prev), Pt(e, f, v), Pt(e, v, M), Mr(v, M, r), f = v, p = [], m = [], o = Rr(f.next);
        continue;
      }
    if (v !== o) {
      if (l !== void 0 && l.has(v)) {
        if (p.length < m.length) {
          var K = m[0], U;
          f = K.prev;
          var ge = p[0], _e = p[p.length - 1];
          for (U = 0; U < p.length; U += 1)
            Mr(p[U], K, r);
          for (U = 0; U < m.length; U += 1)
            l.delete(m[U]);
          Pt(e, ge.prev, _e.next), Pt(e, f, ge), Pt(e, _e, K), o = K, f = _e, C -= 1, p = [], m = [];
        } else
          l.delete(v), Mr(v, o, r), Pt(e, v.prev, v.next), Pt(e, v, f === null ? e.effect.first : f.next), Pt(e, f, v), f = v;
        continue;
      }
      for (p = [], m = []; o !== null && o !== v; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), m.push(o), o = Rr(o.next);
      if (o === null)
        continue;
    }
    (v.f & Ct) === 0 && p.push(v), f = v, o = Rr(v.next);
  }
  if (e.outrogroups !== null) {
    for (const ae of e.outrogroups)
      ae.pending.size === 0 && (Qn(e, vn(ae.done)), e.outrogroups?.delete(ae));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var Ce = [];
    if (l !== void 0)
      for (v of l)
        (v.f & Ae) === 0 && Ce.push(v);
    for (; o !== null; )
      (o.f & Ae) === 0 && o !== e.fallback && Ce.push(o), o = Rr(o.next);
    var Ee = Ce.length;
    if (Ee > 0) {
      var qt = a === 0 ? r : null;
      mo(e, Ce, qt);
    }
  }
}
function wo(e, t, r, n, i, a, c, o) {
  var l = (c & ps) !== 0 ? (c & ys) === 0 ? /* @__PURE__ */ Js(r, !1, !1) : ar(r) : null, f = (c & xs) !== 0 ? ar(i) : null;
  return {
    v: l,
    i: f,
    e: Ke(() => (a(t, l ?? r, f ?? i, o), () => {
      e.delete(n);
    }))
  };
}
function Mr(e, t, r) {
  if (e.nodes)
    for (var n = e.nodes.start, i = e.nodes.end, a = t && (t.f & Ct) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : r; n !== null; ) {
      var c = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Hr(n)
      );
      if (a.before(n), n === i)
        return;
      n = c;
    }
}
function Pt(e, t, r) {
  t === null ? e.effect.first = r : t.next = r, r === null ? e.effect.last = t : r.prev = t;
}
function Dn(e, t, r = !1, n = !1, i = !1, a = !1) {
  var c = e, o = "";
  if (r)
    var l = (
      /** @type {Element} */
      e
    );
  D(() => {
    var f = (
      /** @type {Effect} */
      B
    );
    if (o !== (o = t() ?? "")) {
      if (r) {
        f.nodes = null, l.innerHTML = /** @type {string} */
        o, o !== "" && Lr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Bt(l),
          /** @type {TemplateNode} */
          l.lastChild
        );
        return;
      }
      if (f.nodes !== null && (ua(
        f.nodes.start,
        /** @type {TemplateNode} */
        f.nodes.end
      ), f.nodes = null), o !== "") {
        var p = n ? ws : i ? Es : void 0, m = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          oa(n ? "svg" : i ? "math" : "template", p)
        );
        m.innerHTML = /** @type {any} */
        o;
        var b = n || i ? m : (
          /** @type {HTMLTemplateElement} */
          m.content
        );
        if (Lr(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Bt(b),
          /** @type {TemplateNode} */
          b.lastChild
        ), n || i)
          for (; /* @__PURE__ */ Bt(b); )
            c.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Bt(b)
            );
        else
          c.before(b);
      }
    }
  });
}
function wa(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (r = wa(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function Eo() {
  for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++) (e = arguments[r]) && (t = wa(e)) && (n && (n += " "), n += t);
  return n;
}
function h(e) {
  return typeof e == "object" ? Eo(e) : e ?? "";
}
function So(e, t, r) {
  var n = e == null ? "" : "" + e;
  return n === "" ? null : n;
}
function g(e, t, r, n, i, a) {
  var c = e.__className;
  if (c !== r || c === void 0) {
    var o = So(r);
    o == null ? e.removeAttribute("class") : e.className = o, e.__className = r;
  }
  return a;
}
function To(e, t, r = t) {
  var n = /* @__PURE__ */ new WeakSet();
  la(e, "input", async (i) => {
    var a = i ? e.defaultValue : e.value;
    if (a = Ln(e) ? Bn(a) : a, r(a), P !== null && n.add(P), await lo(), a !== (a = t())) {
      var c = e.selectionStart, o = e.selectionEnd, l = e.value.length;
      if (e.value = a ?? "", o !== null) {
        var f = e.value.length;
        c === o && o === l && f > l ? (e.selectionStart = f, e.selectionEnd = f) : (e.selectionStart = c, e.selectionEnd = Math.min(o, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  _n(t) == null && e.value && (r(Ln(e) ? Bn(e.value) : e.value), P !== null && n.add(P)), gn(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        P
      );
      if (n.has(a))
        return;
    }
    Ln(e) && i === Bn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ao(e, t, r = t) {
  la(e, "change", (n) => {
    var i = n ? e.defaultChecked : e.checked;
    r(i);
  }), // If we are hydrating and the value has since changed,
  // then use the update value from the input instead.
  // If defaultChecked is set, then checked == defaultChecked
  _n(t) == null && r(e.checked), gn(() => {
    var n = t();
    e.checked = !!n;
  });
}
function Ln(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function Bn(e) {
  return e === "" ? null : +e;
}
function Pi(e, t) {
  return e === t || e?.[$r] === t;
}
function Co(e = {}, t, r, n) {
  var i = (
    /** @type {ComponentContext} */
    ze.r
  ), a = (
    /** @type {Effect} */
    B
  );
  return no(() => {
    var c, o;
    return gn(() => {
      c = o, o = [], _n(() => {
        e !== r(...o) && (t(e, ...o), c && Pi(r(...c), e) && t(null, ...c));
      });
    }), () => {
      let l = a;
      for (; l !== i && l.parent !== null && l.parent.f & zn; )
        l = l.parent;
      const f = () => {
        o && Pi(r(...o), e) && t(null, ...o);
      }, p = l.teardown;
      l.teardown = () => {
        f(), p?.();
      };
    };
  }), e;
}
const Io = "5";
var Oi;
typeof window < "u" && ((Oi = window.__svelte ?? (window.__svelte = {})).v ?? (Oi.v = /* @__PURE__ */ new Set())).add(Io);
var Ro = /* @__PURE__ */ O("<div> </div>"), Mo = /* @__PURE__ */ O("<div></div>"), No = /* @__PURE__ */ O("<button>Upload</button>"), Fo = /* @__PURE__ */ O("<p>Loading installed packages…</p>"), Po = /* @__PURE__ */ O("<div> </div>"), Oo = /* @__PURE__ */ O("<p>No packages installed yet. Browse a registry or upload files to install your first package.</p>"), Do = /* @__PURE__ */ O("<span><!> </span>"), Lo = /* @__PURE__ */ O("<button>Update</button>"), Bo = /* @__PURE__ */ O("<button>Reload</button>"), Uo = /* @__PURE__ */ O("<!> <!> <button>Uninstall</button>", 1), zo = /* @__PURE__ */ O("<tr><td><span> </span></td><td> </td><td> </td><td> </td><td><span> </span></td><td> </td><td><!></td></tr>"), jo = /* @__PURE__ */ O("<div><table><thead><tr><th>Type</th><th>ID</th><th>Installed</th><th>Latest</th><th>Status</th><th>Source</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), Vo = /* @__PURE__ */ O("<div><!></div>"), qo = /* @__PURE__ */ O("<p>Loading realm info…</p>"), Ho = /* @__PURE__ */ O("<div> </div>"), Yo = /* @__PURE__ */ O("<p>No file registry configured for this realm. Set <code>file_registry_canister_id</code> via <code>set_canister_config</code> or add it to the deploy descriptor's <code>infra</code> section.</p>"), Ko = /* @__PURE__ */ O("<div> </div>"), Jo = /* @__PURE__ */ O("<div></div>"), Go = /* @__PURE__ */ O("<p>Loading registry catalog…</p>"), Wo = /* @__PURE__ */ O("<p>This registry has no published packages.</p>"), Qo = /* @__PURE__ */ O("<span>update available</span>"), Xo = /* @__PURE__ */ O("<span>installed</span>"), Zo = /* @__PURE__ */ O("<span>not installed</span>"), $o = /* @__PURE__ */ O("<span><!> </span>"), el = /* @__PURE__ */ O("<button>Install</button>"), tl = /* @__PURE__ */ O("<button>Update</button>"), rl = /* @__PURE__ */ O("<span> </span>"), nl = /* @__PURE__ */ O("<tr><td><span> </span></td><td> </td><td> </td><td> </td><td><!></td><td><!></td></tr>"), il = /* @__PURE__ */ O("<div><table><thead><tr><th>Type</th><th>ID</th><th>Latest</th><th>Registry</th><th>Status</th><th>Actions</th></tr></thead><tbody></tbody></table></div>"), al = /* @__PURE__ */ O("<!> <!>", 1), sl = /* @__PURE__ */ O("<div><!></div>"), ol = /* @__PURE__ */ O("<div> </div>"), ll = /* @__PURE__ */ O("<li> <span> </span></li>"), fl = /* @__PURE__ */ O("<div> <button>clear</button></div> <!> <ul></ul>", 1), dl = /* @__PURE__ */ O('<label><input type="checkbox"/> Run <code>init.py</code> after install</label>'), ul = /* @__PURE__ */ O("<!> Installing…", 1), cl = /* @__PURE__ */ O('<div><div><span>What are you installing?</span> <div><button>extension</button> <button>codex</button></div></div> <div><label for="pm-id"> </label> <input id="pm-id" type="text" placeholder="my_extension"/></div> <div><span>Files (pick a folder)</span> <input type="file" multiple="" webkitdirectory=""/></div> <!> <!> <button><!></button></div>'), vl = /* @__PURE__ */ O(`<div><div><div><h1>Package Manager <span> </span></h1> <p>Install, update, and uninstall extensions and codex packages from
				connected file registries.</p></div> <button>Refresh</button></div> <!> <nav><button>Installed <span> </span></button> <button>Browse <span> </span></button> <!></nav> <!> <!> <!></div>`);
function hl(e, t) {
  ji(t, !0);
  const r = t.ctx.theme?.cn ?? ((...d) => d.filter(Boolean).join(" ")), n = t.ctx.config?.fileRegistryCanisterId || "";
  function i(d) {
    const _ = typeof window < "u" ? window.location.host : "";
    if (_.includes("localhost") || _.includes("127.0.0.1")) {
      const k = _.split(":")[1] ?? "4943";
      return `http://${d}.localhost:${k}`;
    }
    return `https://${d}.icp0.io`;
  }
  async function a(d) {
    const _ = await fetch(d, { headers: { Accept: "application/json" } });
    if (!_.ok)
      throw new Error(`HTTP ${_.status} from ${d}: ${await _.text().catch(() => "")}`);
    return await _.json();
  }
  async function c(d) {
    return a(`${i(d)}/api/extensions`);
  }
  async function o(d) {
    return a(`${i(d)}/api/codices`);
  }
  function l(d, _) {
    const y = d.split("-", 1)[0].split(".").map((S) => parseInt(S, 10) || 0), k = _.split("-", 1)[0].split(".").map((S) => parseInt(S, 10) || 0), j = Math.max(y.length, k.length);
    for (let S = 0; S < j; S++) {
      const N = y[S] ?? 0, T = k[S] ?? 0;
      if (N !== T) return N - T;
    }
    return d === _ ? 0 : d < _ ? -1 : 1;
  }
  function f(d) {
    return typeof d == "string" ? JSON.parse(d) : d;
  }
  let p = /* @__PURE__ */ J("installed"), m = /* @__PURE__ */ J(Ye([])), b = /* @__PURE__ */ J(!0), x = /* @__PURE__ */ J(""), v = /* @__PURE__ */ J(""), C = /* @__PURE__ */ J(Ye([])), M = /* @__PURE__ */ J(!0), K = /* @__PURE__ */ J(""), U = /* @__PURE__ */ J(Ye([])), ge = /* @__PURE__ */ J(!1), _e = /* @__PURE__ */ J(Ye([])), Ce = /* @__PURE__ */ J(Ye({})), Ee = /* @__PURE__ */ J(Ye([])), qt = 0, ae = /* @__PURE__ */ J("extension"), fe = /* @__PURE__ */ J(""), Xe = /* @__PURE__ */ J(Ye([])), Er = /* @__PURE__ */ J(!0), Kr = /* @__PURE__ */ J(!1), Jr = /* @__PURE__ */ J(null), pn = /* @__PURE__ */ nt(() => u(Xe).reduce((d, _) => d + _.size, 0)), Ea = /* @__PURE__ */ nt(() => u(pn) > 1.8 * 1024 * 1024), fi = /* @__PURE__ */ nt(() => t.ctx.isAuthenticated !== !1);
  function or(d, _) {
    return `${d}:${_}`;
  }
  function xn(d, _, y) {
    A(Ce, { ...u(Ce), [or(d, _)]: y }, !0);
  }
  function yn(d, _) {
    const y = { ...u(Ce) };
    delete y[or(d, _)], A(Ce, y, !0);
  }
  function Ze(d, _) {
    const y = ++qt;
    A(Ee, [...u(Ee), { id: y, type: d, text: _ }], !0), setTimeout(
      () => {
        A(Ee, u(Ee).filter((k) => k.id !== y), !0);
      },
      5e3
    );
  }
  function bn(d) {
    return d < 1024 ? `${d} B` : d < 1024 * 1024 ? `${(d / 1024).toFixed(1)} KB` : `${(d / (1024 * 1024)).toFixed(2)} MB`;
  }
  function mn(d, _ = 8) {
    return d.length > _ ? `${d.slice(0, _)}…` : d;
  }
  function kn() {
    typeof window < "u" && window.dispatchEvent(new CustomEvent("realms:extensions-changed"));
  }
  async function Sa() {
    A(b, !0), A(x, "");
    try {
      const d = await t.ctx.backend.status(), _ = f(d);
      if (_?.success && _?.data?.status) {
        const y = _.data.status.canisters ?? [], k = y.filter((S) => S.canister_type === "file_registry").map((S) => ({ canister_id: S.canister_id, canister_type: S.canister_type }));
        A(m, k, !0);
        const j = y.find((S) => S.canister_type === "marketplace");
        A(v, j?.canister_id ?? "", !0);
      } else
        A(m, [], !0), A(x, "status() did not return a success payload");
    } catch (d) {
      A(x, d?.message ?? String(d), !0), A(m, [], !0);
    } finally {
      A(b, !1);
    }
  }
  async function Gr() {
    A(M, !0), A(K, "");
    try {
      const [d, _] = await Promise.all([
        t.ctx.backend.list_runtime_extensions(),
        t.ctx.backend.list_codex_packages()
      ]), y = [], k = f(d);
      if (k?.success) {
        const S = k.runtime_extensions ?? [], N = k.all_manifests ?? {}, T = k.sources ?? {};
        for (const I of S) {
          const G = N?.[I] ?? {};
          y.push({
            kind: "extension",
            id: I,
            version: G?.version ?? "",
            source: T?.[I] ?? null,
            manifest: G
          });
        }
      }
      const j = f(_);
      if (j?.success) {
        const S = j.codex_packages ?? [], N = j.manifests ?? {};
        for (const T of S) {
          const I = N?.[T] ?? {};
          y.push({
            kind: "codex",
            id: T,
            version: I?.version ?? "",
            source: null,
            manifest: I
          });
        }
      }
      A(
        C,
        y.sort((S, N) => S.kind === N.kind ? S.id.localeCompare(N.id) : S.kind.localeCompare(N.kind)),
        !0
      );
    } catch (d) {
      A(K, d?.message ?? String(d), !0);
    } finally {
      A(M, !1);
    }
  }
  async function di() {
    A(ge, !0), A(_e, [], !0);
    const d = [], _ = u(m).length > 0 ? u(m) : n ? [
      {
        canister_id: n,
        canister_type: "file_registry"
      }
    ] : [];
    for (const y of _) {
      const k = [], j = await c(y.canister_id).catch((N) => (k.push(`extensions: ${N?.message ?? String(N)}`), [])), S = await o(y.canister_id).catch((N) => (k.push(`codices: ${N?.message ?? String(N)}`), []));
      for (const N of j)
        d.push({
          kind: "extension",
          id: N.ext_id,
          versions: N.versions,
          latest: N.latest,
          manifest: N.manifest,
          registryCanisterId: y.canister_id
        });
      for (const N of S)
        d.push({
          kind: "codex",
          id: N.codex_id,
          versions: N.versions,
          latest: N.latest,
          manifest: null,
          registryCanisterId: y.canister_id
        });
      k.length > 0 && j.length === 0 && S.length === 0 && A(
        _e,
        [
          ...u(_e),
          `Failed to load from registry ${mn(y.canister_id)}: ${k.join("; ")}`
        ],
        !0
      );
    }
    A(
      U,
      d.sort((y, k) => y.kind === k.kind ? y.id.localeCompare(k.id) : y.kind.localeCompare(k.kind)),
      !0
    ), A(ge, !1);
  }
  async function ui() {
    await Sa(), await Promise.all([Gr(), di()]);
  }
  async function Ta(d) {
    if (confirm(`Uninstall ${d.id}? Data written by the package will remain, but the package itself will be removed.`)) {
      xn(d.kind, d.id, `Uninstalling ${d.id}…`);
      try {
        const y = JSON.stringify(d.kind === "extension" ? { extension_id: d.id } : { codex_id: d.id }), k = d.kind === "extension" ? await t.ctx.backend.uninstall_extension(y) : await t.ctx.backend.uninstall_codex(y), j = f(k);
        if (!j?.success) throw new Error(j?.error ?? "Unknown error");
        Ze("success", `Uninstalled ${d.id}`), kn(), await Promise.all([Gr(), di()]);
      } catch (y) {
        Ze("error", y?.message ?? String(y));
      } finally {
        yn(d.kind, d.id);
      }
    }
  }
  async function Aa(d) {
    xn(d.kind, d.id, `Reloading ${d.id}…`);
    try {
      const _ = await t.ctx.backend.reload_codex(JSON.stringify({ codex_id: d.id, run_init: !1 })), y = f(_);
      if (!y?.success) throw new Error(y?.error ?? "Unknown error");
      y.init_warning && Ze("info", `Init warning: ${y.init_warning}`), Ze("success", `Reloaded ${d.id}`);
    } catch (_) {
      Ze("error", _?.message ?? String(_));
    } finally {
      yn(d.kind, d.id);
    }
  }
  async function Ca(d) {
    const _ = u(U).find((k) => k.kind === d.kind && k.id === d.id);
    !_ || !_.latest || d.version && l(_.latest, d.version) <= 0 || !confirm(`Update ${d.id} from v${d.version || "?"} to v${_.latest}?`) || await wn(_, _.latest);
  }
  async function wn(d, _) {
    xn(d.kind, d.id, `Installing ${d.id}…`);
    try {
      let y;
      d.kind === "extension" ? y = await t.ctx.backend.install_extension_from_registry(JSON.stringify({
        registry_canister_id: d.registryCanisterId,
        ext_id: d.id,
        version: _
      })) : y = await t.ctx.backend.install_codex_from_registry(JSON.stringify({
        registry_canister_id: d.registryCanisterId,
        codex_id: d.id,
        version: _,
        run_init: !0
      }));
      const k = f(y);
      if (!k?.success) throw new Error(k?.error ?? "Unknown error");
      k.init_warning && Ze("info", `Init warning: ${k.init_warning}`), Ze("success", `Installed ${d.id} (v${_})`), kn(), await Gr();
    } catch (y) {
      Ze("error", y?.message ?? String(y));
    } finally {
      yn(d.kind, d.id);
    }
  }
  async function Ia(d) {
    return await new Promise((_, y) => {
      const k = new FileReader();
      k.onload = () => _(String(k.result ?? "")), k.onerror = () => y(k.error), k.readAsText(d);
    });
  }
  async function Ra(d) {
    const _ = d.target;
    if (!_.files) return;
    const y = [];
    for (const k of Array.from(_.files)) {
      const j = k.webkitRelativePath;
      let S = j && j.length > 0 ? j : k.name;
      const N = S.indexOf("/");
      j && N >= 0 && (S = S.slice(N + 1)), y.push({ path: S, size: k.size, content: await Ia(k) });
    }
    A(Xe, y, !0);
  }
  function ci() {
    A(Xe, [], !0), u(Jr) && (u(Jr).value = "");
  }
  async function Ma() {
    if (!(!u(fe) || u(Xe).length === 0)) {
      A(Kr, !0);
      try {
        const d = {};
        for (const k of u(Xe)) d[k.path] = k.content;
        let _;
        u(ae) === "extension" ? _ = await t.ctx.backend.install_extension(JSON.stringify({ extension_id: u(fe), files: d })) : _ = await t.ctx.backend.install_codex(JSON.stringify({
          codex_id: u(fe),
          files: d,
          run_init: u(Er)
        }));
        const y = f(_);
        if (!y?.success) throw new Error(y?.error ?? "Unknown error");
        y.init_warning && Ze("info", `Init warning: ${y.init_warning}`), Ze("success", `Installed ${u(fe)}`), kn(), ci(), A(fe, ""), await Gr();
      } catch (d) {
        Ze("error", d?.message ?? String(d));
      } finally {
        A(Kr, !1);
      }
    }
  }
  function vi(d) {
    return u(U).find((_) => _.kind === d.kind && _.id === d.id);
  }
  function Na(d) {
    const _ = vi(d);
    return !_ || !_.latest || !d.version ? "unknown" : l(_.latest, d.version) > 0 ? "outdated" : "installed";
  }
  function Fa(d) {
    return u(C).find((_) => _.kind === d.kind && _.id === d.id);
  }
  function hi(d) {
    return d === "extension" ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-800 dark:text-indigo-300" : "bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300";
  }
  function Pa(d) {
    return d === "outdated" ? {
      cls: "bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300",
      label: "update available"
    } : d === "installed" ? {
      cls: "bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300",
      label: "installed"
    } : {
      cls: "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400",
      label: "unknown"
    };
  }
  const En = '<svg class="inline-block w-3.5 h-3.5 animate-spin" viewBox="0 0 24 24" fill="none"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/></svg>';
  to(() => {
    ui();
  });
  var Sn = vl(), Tn = w(Sn), gi = w(Tn), An = w(gi), _i = E(w(An)), Oa = w(_i), Da = E(An, 2), Cn = E(gi, 2), pi = E(Tn, 2);
  {
    var La = (d) => {
      var _ = Mo();
      Ir(_, 21, () => u(Ee), (y) => y.id, (y, k) => {
        var j = Ro(), S = w(j);
        D(
          (N) => {
            g(j, 1, N), Q(S, u(k).text);
          },
          [
            () => h(r("px-4 py-3 rounded-lg text-sm text-white shadow-lg", u(k).type === "success" ? "bg-green-700" : u(k).type === "error" ? "bg-red-700" : "bg-blue-700"))
          ]
        ), F(y, j);
      }), D((y) => g(_, 1, y), [
        () => h(r("fixed top-5 right-5 z-50 flex flex-col gap-2 w-80"))
      ]), F(d, _);
    };
    ue(pi, (d) => {
      u(Ee).length > 0 && d(La);
    });
  }
  var In = E(pi, 2), Wr = w(In), xi = E(w(Wr)), Ba = w(xi), Qr = E(Wr, 2), yi = E(w(Qr)), Ua = w(yi), za = E(Qr, 2);
  {
    var ja = (d) => {
      var _ = No();
      D((y) => g(_, 1, y), [
        () => h(r("px-5 py-2.5 text-sm font-medium border-b-2 transition-colors", u(p) === "upload" ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"))
      ]), Ie("click", _, () => A(p, "upload")), F(d, _);
    };
    ue(za, (d) => {
      u(fi) && d(ja);
    });
  }
  var bi = E(In, 2);
  {
    var Va = (d) => {
      var _ = Vo(), y = w(_);
      {
        var k = (T) => {
          var I = Fo();
          D((G) => g(I, 1, G), [
            () => h(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
          ]), F(T, I);
        }, j = (T) => {
          var I = Po(), G = w(I);
          D(
            (pe) => {
              g(I, 1, pe), Q(G, u(K));
            },
            [
              () => h(r("p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300"))
            ]
          ), F(T, I);
        }, S = (T) => {
          var I = Oo();
          D((G) => g(I, 1, G), [
            () => h(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
          ]), F(T, I);
        }, N = (T) => {
          var I = jo(), G = w(I), pe = w(G), lt = w(pe), xt = w(lt), ft = E(xt), yt = E(ft), te = E(yt), se = E(te), Se = E(se), $e = E(Se), et = E(pe);
          Ir(et, 21, () => u(C), (Fe) => or(Fe.kind, Fe.id), (Fe, X) => {
            const H = /* @__PURE__ */ nt(() => Na(u(X))), re = /* @__PURE__ */ nt(() => vi(u(X))), oe = /* @__PURE__ */ nt(() => Pa(u(H))), Pe = /* @__PURE__ */ nt(() => u(Ce)[or(u(X).kind, u(X).id)]);
            var ve = zo(), ne = w(ve), Y = w(ne), xe = w(Y), $ = E(ne), he = w($), de = E($), ye = w(de), be = E(de), Rt = w(be), bt = E(be), Mt = w(bt), Sr = w(Mt), Ht = E(bt), Rn = w(Ht), lr = E(Ht), Mn = w(lr);
            {
              var Tr = (dt) => {
                var ut = Do(), mt = w(ut);
                Dn(mt, () => En);
                var Nt = E(mt);
                D(
                  (Ft) => {
                    g(ut, 1, Ft), Q(Nt, ` ${u(Pe) ?? ""}`);
                  },
                  [
                    () => h(r("inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"))
                  ]
                ), F(dt, ut);
              }, Nn = (dt) => {
                var ut = Uo(), mt = Xr(ut);
                {
                  var Nt = (Oe) => {
                    var tt = Lo();
                    D((V) => g(tt, 1, V), [
                      () => h(r("text-xs font-medium px-3 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700 mr-1.5"))
                    ]), Ie("click", tt, () => Ca(u(X))), F(Oe, tt);
                  };
                  ue(mt, (Oe) => {
                    u(H) === "outdated" && Oe(Nt);
                  });
                }
                var Ft = E(mt, 2);
                {
                  var Ar = (Oe) => {
                    var tt = Bo();
                    D((V) => g(tt, 1, V), [
                      () => h(r("text-xs font-medium px-3 py-1 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 mr-1.5"))
                    ]), Ie("click", tt, () => Aa(u(X))), F(Oe, tt);
                  };
                  ue(Ft, (Oe) => {
                    u(X).kind === "codex" && Oe(Ar);
                  });
                }
                var fr = E(Ft, 2);
                D((Oe) => g(fr, 1, Oe), [
                  () => h(r("text-xs font-medium px-3 py-1 rounded-lg bg-red-600 text-white hover:bg-red-700"))
                ]), Ie("click", fr, () => Ta(u(X))), F(dt, ut);
              };
              ue(Mn, (dt) => {
                u(Pe) ? dt(Tr) : dt(Nn, -1);
              });
            }
            D(
              (dt, ut, mt, Nt, Ft, Ar, fr, Oe, tt, V, q) => {
                g(ve, 1, dt), g(ne, 1, ut), g(Y, 1, mt), Q(xe, u(X).kind), g($, 1, Nt), Q(he, u(X).id), g(de, 1, Ft), Q(ye, u(X).version || "—"), g(be, 1, Ar), Q(Rt, u(re)?.latest ?? "—"), g(bt, 1, fr), g(Mt, 1, Oe), Q(Sr, u(oe).label), g(Ht, 1, tt), Q(Rn, V), g(lr, 1, q);
              },
              [
                () => h(r("hover:bg-gray-50 dark:hover:bg-gray-700/30")),
                () => h(r("px-4 py-3")),
                () => h(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full", hi(u(X).kind))),
                () => h(r("px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300")),
                () => h(r("px-4 py-3 text-gray-700 dark:text-gray-300")),
                () => h(r("px-4 py-3 text-gray-700 dark:text-gray-300")),
                () => h(r("px-4 py-3")),
                () => h(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full", u(oe).cls)),
                () => h(r("px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400")),
                () => u(X).source?.registry_canister_id ? mn(u(X).source.registry_canister_id) : "—",
                () => h(r("px-4 py-3 text-right whitespace-nowrap"))
              ]
            ), F(Fe, ve);
          }), D(
            (Fe, X, H, re, oe, Pe, ve, ne, Y, xe, $) => {
              g(I, 1, Fe), g(G, 1, X), g(lt, 1, H), g(xt, 1, re), g(ft, 1, oe), g(yt, 1, Pe), g(te, 1, ve), g(se, 1, ne), g(Se, 1, Y), g($e, 1, xe), g(et, 1, $);
            },
            [
              () => h(r("overflow-x-auto")),
              () => h(r("w-full text-sm")),
              () => h(r("bg-gray-50 dark:bg-gray-700/50")),
              () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => h(r("px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
              () => h(r("divide-y divide-gray-100 dark:divide-gray-700"))
            ]
          ), F(T, I);
        };
        ue(y, (T) => {
          u(M) ? T(k) : u(K) ? T(j, 1) : u(C).length === 0 ? T(S, 2) : T(N, -1);
        });
      }
      D((T) => g(_, 1, T), [
        () => h(r("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"))
      ]), F(d, _);
    };
    ue(bi, (d) => {
      u(p) === "installed" && d(Va);
    });
  }
  var mi = E(bi, 2);
  {
    var qa = (d) => {
      var _ = sl(), y = w(_);
      {
        var k = (T) => {
          var I = qo();
          D((G) => g(I, 1, G), [
            () => h(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
          ]), F(T, I);
        }, j = (T) => {
          var I = Ho(), G = w(I);
          D(
            (pe) => {
              g(I, 1, pe), Q(G, `Could not read realm.registries: ${u(x) ?? ""}`);
            },
            [
              () => h(r("p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300 mb-4"))
            ]
          ), F(T, I);
        }, S = (T) => {
          var I = Yo(), G = E(w(I)), pe = E(G, 2), lt = E(pe, 2);
          D(
            (xt, ft, yt, te) => {
              g(I, 1, xt), g(G, 1, ft), g(pe, 1, yt), g(lt, 1, te);
            },
            [
              () => h(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12")),
              () => h(r("bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs")),
              () => h(r("bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs")),
              () => h(r("bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs"))
            ]
          ), F(T, I);
        }, N = (T) => {
          var I = al(), G = Xr(I);
          {
            var pe = (te) => {
              var se = Jo();
              Ir(se, 21, () => u(_e), Ni, (Se, $e) => {
                var et = Ko(), Fe = w(et);
                D(
                  (X) => {
                    g(et, 1, X), Q(Fe, u($e));
                  },
                  [
                    () => h(r("p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-sm text-red-800 dark:text-red-300"))
                  ]
                ), F(Se, et);
              }), D((Se) => g(se, 1, Se), [() => h(r("space-y-2 mb-4"))]), F(te, se);
            };
            ue(G, (te) => {
              u(_e).length > 0 && te(pe);
            });
          }
          var lt = E(G, 2);
          {
            var xt = (te) => {
              var se = Go();
              D((Se) => g(se, 1, Se), [
                () => h(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
              ]), F(te, se);
            }, ft = (te) => {
              var se = Wo();
              D((Se) => g(se, 1, Se), [
                () => h(r("text-sm text-gray-500 dark:text-gray-400 text-center py-12"))
              ]), F(te, se);
            }, yt = (te) => {
              var se = il(), Se = w(se), $e = w(Se), et = w($e), Fe = w(et), X = E(Fe), H = E(X), re = E(H), oe = E(re), Pe = E(oe), ve = E($e);
              Ir(ve, 21, () => u(U), (ne) => or(ne.kind, ne.id) + ":" + ne.registryCanisterId, (ne, Y) => {
                const xe = /* @__PURE__ */ nt(() => Fa(u(Y))), $ = /* @__PURE__ */ nt(() => u(xe)?.version ?? ""), he = /* @__PURE__ */ nt(() => u(xe) && u(Y).latest && u($) && l(u(Y).latest, u($)) > 0), de = /* @__PURE__ */ nt(() => u(Ce)[or(u(Y).kind, u(Y).id)]);
                var ye = nl(), be = w(ye), Rt = w(be), bt = w(Rt), Mt = E(be), Sr = w(Mt), Ht = E(Mt), Rn = w(Ht), lr = E(Ht), Mn = w(lr), Tr = E(lr), Nn = w(Tr);
                {
                  var dt = (V) => {
                    var q = Qo();
                    D((me) => g(q, 1, me), [
                      () => h(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300"))
                    ]), F(V, q);
                  }, ut = (V) => {
                    var q = Xo();
                    D((me) => g(q, 1, me), [
                      () => h(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-300"))
                    ]), F(V, q);
                  }, mt = (V) => {
                    var q = Zo();
                    D((me) => g(q, 1, me), [
                      () => h(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"))
                    ]), F(V, q);
                  };
                  ue(Nn, (V) => {
                    u(xe) && u(he) ? V(dt) : u(xe) ? V(ut, 1) : V(mt, -1);
                  });
                }
                var Nt = E(Tr), Ft = w(Nt);
                {
                  var Ar = (V) => {
                    var q = $o(), me = w(q);
                    Dn(me, () => En);
                    var Cr = E(me);
                    D(
                      (Fn) => {
                        g(q, 1, Fn), Q(Cr, ` ${u(de) ?? ""}`);
                      },
                      [
                        () => h(r("inline-flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400"))
                      ]
                    ), F(V, q);
                  }, fr = (V) => {
                    var q = el();
                    D(
                      (me) => {
                        q.disabled = !u(Y).latest, g(q, 1, me);
                      },
                      [
                        () => h(r("text-xs font-medium px-3 py-1 rounded-lg bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"))
                      ]
                    ), Ie("click", q, () => wn(u(Y), u(Y).latest)), F(V, q);
                  }, Oe = (V) => {
                    var q = tl();
                    D((me) => g(q, 1, me), [
                      () => h(r("text-xs font-medium px-3 py-1 rounded-lg bg-amber-600 text-white hover:bg-amber-700"))
                    ]), Ie("click", q, () => wn(u(Y), u(Y).latest)), F(V, q);
                  }, tt = (V) => {
                    var q = rl(), me = w(q);
                    D(
                      (Cr) => {
                        g(q, 1, Cr), Q(me, `v${u($) ?? ""}`);
                      },
                      [() => h(r("text-xs text-gray-400 dark:text-gray-500"))]
                    ), F(V, q);
                  };
                  ue(Ft, (V) => {
                    u(de) ? V(Ar) : u(xe) ? u(he) ? V(Oe, 2) : V(tt, -1) : V(fr, 1);
                  });
                }
                D(
                  (V, q, me, Cr, Fn, Ka, Ja, Ga, Wa) => {
                    g(ye, 1, V), g(be, 1, q), g(Rt, 1, me), Q(bt, u(Y).kind), g(Mt, 1, Cr), Q(Sr, u(Y).id), g(Ht, 1, Fn), Q(Rn, u(Y).latest || "—"), g(lr, 1, Ka), Q(Mn, Ja), g(Tr, 1, Ga), g(Nt, 1, Wa);
                  },
                  [
                    () => h(r("hover:bg-gray-50 dark:hover:bg-gray-700/30")),
                    () => h(r("px-4 py-3")),
                    () => h(r("inline-block text-xs font-medium px-2 py-0.5 rounded-full", hi(u(Y).kind))),
                    () => h(r("px-4 py-3 font-mono text-xs text-gray-700 dark:text-gray-300")),
                    () => h(r("px-4 py-3 text-gray-700 dark:text-gray-300")),
                    () => h(r("px-4 py-3 font-mono text-xs text-gray-500 dark:text-gray-400")),
                    () => mn(u(Y).registryCanisterId),
                    () => h(r("px-4 py-3")),
                    () => h(r("px-4 py-3 text-right whitespace-nowrap"))
                  ]
                ), F(ne, ye);
              }), D(
                (ne, Y, xe, $, he, de, ye, be, Rt, bt) => {
                  g(se, 1, ne), g(Se, 1, Y), g(et, 1, xe), g(Fe, 1, $), g(X, 1, he), g(H, 1, de), g(re, 1, ye), g(oe, 1, be), g(Pe, 1, Rt), g(ve, 1, bt);
                },
                [
                  () => h(r("overflow-x-auto")),
                  () => h(r("w-full text-sm")),
                  () => h(r("bg-gray-50 dark:bg-gray-700/50")),
                  () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => h(r("px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => h(r("px-4 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide")),
                  () => h(r("divide-y divide-gray-100 dark:divide-gray-700"))
                ]
              ), F(te, se);
            };
            ue(lt, (te) => {
              u(ge) ? te(xt) : u(U).length === 0 ? te(ft, 1) : te(yt, -1);
            });
          }
          F(T, I);
        };
        ue(y, (T) => {
          u(b) ? T(k) : u(x) ? T(j, 1) : u(m).length === 0 && !n ? T(S, 2) : T(N, -1);
        });
      }
      D((T) => g(_, 1, T), [
        () => h(r("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5"))
      ]), F(d, _);
    };
    ue(mi, (d) => {
      u(p) === "browse" && d(qa);
    });
  }
  var Ha = E(mi, 2);
  {
    var Ya = (d) => {
      var _ = cl(), y = w(_), k = w(y), j = E(k, 2), S = w(j), N = E(S, 2), T = E(y, 2), I = w(T), G = w(I), pe = E(I, 2), lt = E(T, 2), xt = w(lt), ft = E(xt, 2);
      Co(ft, (H) => A(Jr, H), () => u(Jr));
      var yt = E(lt, 2);
      {
        var te = (H) => {
          var re = fl(), oe = Xr(re), Pe = w(oe), ve = E(Pe), ne = E(oe, 2);
          {
            var Y = ($) => {
              var he = ol(), de = w(he);
              D(
                (ye, be) => {
                  g(he, 1, ye), Q(de, `Total payload ${be ?? ""} exceeds the ~1.8 MB ingress safe limit.
						The install call will likely be rejected; consider publishing through a file registry instead.`);
                },
                [
                  () => h(r("p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg text-sm text-amber-800 dark:text-amber-300 mb-3")),
                  () => bn(u(pn))
                ]
              ), F($, he);
            };
            ue(ne, ($) => {
              u(Ea) && $(Y);
            });
          }
          var xe = E(ne, 2);
          Ir(xe, 21, () => u(Xe), Ni, ($, he) => {
            var de = ll(), ye = w(de), be = E(ye), Rt = w(be);
            D(
              (bt, Mt, Sr) => {
                g(de, 1, bt), Q(ye, `${u(he).path ?? ""} `), g(be, 1, Mt), Q(Rt, `(${Sr ?? ""})`);
              },
              [
                () => h(r("mb-0.5")),
                () => h(r("text-gray-400 dark:text-gray-500")),
                () => bn(u(he).size)
              ]
            ), F($, de);
          }), D(
            ($, he, de, ye) => {
              g(oe, 1, $), Q(Pe, `${u(Xe).length ?? ""} files selected · ${he ?? ""} `), g(ve, 1, de), g(xe, 1, ye);
            },
            [
              () => h(r("text-xs text-gray-500 dark:text-gray-400 mb-2")),
              () => bn(u(pn)),
              () => h(r("ml-2 text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800")),
              () => h(r("max-h-44 overflow-auto text-xs font-mono text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-gray-700 rounded-lg p-2 mb-4 bg-gray-50 dark:bg-gray-900/30 list-none"))
            ]
          ), Ie("click", ve, ci), F(H, re);
        };
        ue(yt, (H) => {
          u(Xe).length > 0 && H(te);
        });
      }
      var se = E(yt, 2);
      {
        var Se = (H) => {
          var re = dl(), oe = w(re), Pe = E(oe, 2);
          D(
            (ve, ne, Y) => {
              g(re, 1, ve), g(oe, 1, ne), g(Pe, 1, Y);
            },
            [
              () => h(r("flex items-center gap-2 mb-4 text-sm text-gray-700 dark:text-gray-300")),
              () => h(r("w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500")),
              () => h(r("bg-gray-100 dark:bg-gray-700 px-1 rounded text-xs"))
            ]
          ), Ao(oe, () => u(Er), (ve) => A(Er, ve)), F(H, re);
        };
        ue(se, (H) => {
          u(ae) === "codex" && H(Se);
        });
      }
      var $e = E(se, 2), et = w($e);
      {
        var Fe = (H) => {
          var re = ul(), oe = Xr(re);
          Dn(oe, () => En), F(H, re);
        }, X = (H) => {
          var re = _o("Install");
          F(H, re);
        };
        ue(et, (H) => {
          u(Kr) ? H(Fe) : H(X, -1);
        });
      }
      D(
        (H, re, oe, Pe, ve, ne, Y, xe, $, he, de, ye, be) => {
          g(_, 1, H), g(y, 1, re), g(k, 1, oe), g(j, 1, Pe), g(S, 1, ve), g(N, 1, ne), g(T, 1, Y), g(I, 1, xe), Q(G, u(ae) === "extension" ? "Extension ID" : "Codex ID"), g(pe, 1, $), g(lt, 1, he), g(xt, 1, de), g(ft, 1, ye), $e.disabled = !u(fe) || u(Xe).length === 0 || u(Kr), g($e, 1, be);
        },
        [
          () => h(r("bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl p-5 max-w-2xl")),
          () => h(r("mb-4")),
          () => h(r("block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5")),
          () => h(r("inline-flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden")),
          () => h(r("px-4 py-1.5 text-xs font-medium transition-colors", u(ae) === "extension" ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600")),
          () => h(r("px-4 py-1.5 text-xs font-medium transition-colors", u(ae) === "codex" ? "bg-indigo-600 text-white" : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-600")),
          () => h(r("mb-4")),
          () => h(r("block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5")),
          () => h(r("w-full px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500/40")),
          () => h(r("mb-4")),
          () => h(r("block text-xs font-medium text-gray-500 dark:text-gray-400 mb-1.5")),
          () => h(r("block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-indigo-50 dark:file:bg-indigo-900/40 file:text-indigo-700 dark:file:text-indigo-300 hover:file:bg-indigo-100 dark:hover:file:bg-indigo-800/40")),
          () => h(r("px-5 py-2.5 text-sm font-medium text-white bg-green-600 rounded-lg", "hover:bg-green-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors inline-flex items-center gap-2"))
        ]
      ), Ie("click", S, () => A(ae, "extension")), Ie("click", N, () => A(ae, "codex")), To(pe, () => u(fe), (H) => A(fe, H)), Ie("change", ft, Ra), Ie("click", $e, Ma), F(d, _);
    };
    ue(Ha, (d) => {
      u(p) === "upload" && u(fi) && d(Ya);
    });
  }
  D(
    (d, _, y, k, j, S, N, T, I, G, pe) => {
      g(Sn, 1, d), g(Tn, 1, _), g(An, 1, y), g(_i, 1, k), Q(Oa, `v${(t.ctx.config?.version || "") ?? ""}`), g(Da, 1, j), Cn.disabled = u(M) || u(ge) || u(b), g(Cn, 1, S), g(In, 1, N), g(Wr, 1, T), g(xi, 1, I), Q(Ba, u(C).length), g(Qr, 1, G), g(yi, 1, pe), Q(Ua, u(U).length);
    },
    [
      () => h(r("max-w-5xl mx-auto p-6")),
      () => h(r("flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4", "bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-900/30 dark:to-blue-900/20", "border-2 border-indigo-200 dark:border-indigo-800 rounded-xl p-5 mb-5")),
      () => h(r("text-xl font-bold text-indigo-900 dark:text-indigo-200 mb-1")),
      () => h(r("text-xs font-normal text-indigo-600 dark:text-indigo-400 ml-2")),
      () => h(r("text-sm text-indigo-700/80 dark:text-indigo-300/80")),
      () => h(r("px-4 py-2 text-sm font-medium border border-indigo-300 dark:border-indigo-700 rounded-lg", "text-indigo-700 dark:text-indigo-300 bg-white/60 dark:bg-gray-800/40", "hover:bg-white dark:hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors")),
      () => h(r("flex border-b border-gray-200 dark:border-gray-700 mb-5")),
      () => h(r("px-5 py-2.5 text-sm font-medium border-b-2 inline-flex items-center gap-2 transition-colors", u(p) === "installed" ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300")),
      () => h(r("text-xs px-2 py-0.5 rounded-full", u(p) === "installed" ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400")),
      () => h(r("px-5 py-2.5 text-sm font-medium border-b-2 inline-flex items-center gap-2 transition-colors", u(p) === "browse" ? "border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400" : "border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300")),
      () => h(r("text-xs px-2 py-0.5 rounded-full", u(p) === "browse" ? "bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300" : "bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400"))
    ]
  ), Ie("click", Cn, ui), Ie("click", Wr, () => A(p, "installed")), Ie("click", Qr, () => A(p, "browse")), F(e, Sn), Vi();
}
co(["click", "change"]);
function pl(e, t) {
  const r = po(hl, { target: e, props: { ctx: t } });
  return {
    unmount() {
      try {
        yo(r);
      } catch {
      }
    }
  };
}
export {
  pl as default
};
