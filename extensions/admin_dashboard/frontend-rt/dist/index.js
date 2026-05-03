var Es = Object.defineProperty;
var Yi = (t) => {
  throw TypeError(t);
};
var As = (t, e, r) => e in t ? Es(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r;
var ge = (t, e, r) => As(t, typeof e != "symbol" ? e + "" : e, r), ni = (t, e, r) => e.has(t) || Yi("Cannot " + r);
var c = (t, e, r) => (ni(t, e, "read from private field"), r ? r.call(t) : e.get(t)), G = (t, e, r) => e.has(t) ? Yi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, r), Q = (t, e, r, n) => (ni(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), vt = (t, e, r) => (ni(t, e, "access private method"), r);
var ki = Array.isArray, Ts = Array.prototype.indexOf, Ur = Array.prototype.includes, Vn = Array.from, Cs = Object.defineProperty, nn = Object.getOwnPropertyDescriptor, Ms = Object.getOwnPropertyDescriptors, Ss = Object.prototype, Ds = Array.prototype, uo = Object.getPrototypeOf, Gi = Object.isExtensible;
const Ls = () => {
};
function Ns(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function fo() {
  var t, e, r = new Promise((n, i) => {
    t = n, e = i;
  });
  return { promise: r, resolve: t, reject: e };
}
function qi(t, e) {
  if (Array.isArray(t))
    return t;
  if (!(Symbol.iterator in t))
    return Array.from(t);
  const r = [];
  for (const n of t)
    if (r.push(n), r.length === e) break;
  return r;
}
const Pt = 2, Hr = 4, Yn = 8, co = 1 << 24, Se = 16, ye = 32, tr = 64, li = 128, de = 512, At = 1024, It = 2048, De = 4096, jt = 8192, ve = 16384, wr = 32768, ui = 1 << 25, Jr = 65536, fi = 1 << 17, Bs = 1 << 18, Gr = 1 << 19, Rs = 1 << 20, Ue = 1 << 25, xr = 65536, Fn = 1 << 21, ln = 1 << 22, Xe = 1 << 23, Rr = Symbol("$state"), Is = Symbol(""), Ie = new class extends Error {
  constructor() {
    super(...arguments);
    ge(this, "name", "StaleReactionError");
    ge(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ps() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Os(t, e, r) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function js(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Fs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Us(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Hs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Js() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function $s() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ys() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const Gs = 1, qs = 2, Ks = 16, Qs = 1, Ws = 2, Mt = Symbol(), vo = "http://www.w3.org/1999/xhtml", Zs = "http://www.w3.org/2000/svg", Xs = "http://www.w3.org/1998/Math/MathML";
function zs() {
  console.warn("https://svelte.dev/e/derived_inert");
}
function ta() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ea() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function ho(t) {
  return t === this.v;
}
function ra(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function po(t) {
  return !ra(t, this.v);
}
let zt = null;
function $r(t) {
  zt = t;
}
function Ei(t, e = !1, r) {
  zt = {
    p: zt,
    i: !1,
    c: null,
    e: null,
    s: t,
    x: null,
    r: (
      /** @type {Effect} */
      W
    ),
    l: null
  };
}
function Ai(t) {
  var e = (
    /** @type {ComponentContext} */
    zt
  ), r = e.e;
  if (r !== null) {
    e.e = null;
    for (var n of r)
      jo(n);
  }
  return e.i = !0, zt = e.p, /** @type {T} */
  {};
}
function go() {
  return !0;
}
let ar = [];
function _o() {
  var t = ar;
  ar = [], Ns(t);
}
function pr(t) {
  if (ar.length === 0 && !on) {
    var e = ar;
    queueMicrotask(() => {
      e === ar && _o();
    });
  }
  ar.push(t);
}
function na() {
  for (; ar.length > 0; )
    _o();
}
function bo(t) {
  var e = W;
  if (e === null)
    return X.f |= Xe, t;
  if ((e.f & wr) === 0 && (e.f & Hr) === 0)
    throw t;
  We(t, e);
}
function We(t, e) {
  for (; e !== null; ) {
    if ((e.f & li) !== 0) {
      if ((e.f & wr) === 0)
        throw t;
      try {
        e.b.error(t);
        return;
      } catch (r) {
        t = r;
      }
    }
    e = e.parent;
  }
  throw t;
}
const ia = -7169;
function xt(t, e) {
  t.f = t.f & ia | e;
}
function Ti(t) {
  (t.f & de) !== 0 || t.deps === null ? xt(t, At) : xt(t, De);
}
function xo(t) {
  if (t !== null)
    for (const e of t)
      (e.f & Pt) === 0 || (e.f & xr) === 0 || (e.f ^= xr, xo(
        /** @type {Derived} */
        e.deps
      ));
}
function yo(t, e, r) {
  (t.f & It) !== 0 ? e.add(t) : (t.f & De) !== 0 && r.add(t), xo(t.deps), xt(t, At);
}
const or = /* @__PURE__ */ new Set();
let V = null, be = null, ci = null, on = !1, ii = !1, Br = null, Ln = null;
var Ki = 0;
let oa = 1;
var Ir, Pr, fr, Pe, Ae, dn, Wt, vn, Ke, Oe, Te, Or, jr, cr, wt, Nn, mo, Bn, di, Rn, sa;
const Hn = class Hn {
  constructor() {
    G(this, wt);
    ge(this, "id", oa++);
    /**
     * The current values of any signals that are updated in this batch.
     * Tuple format: [value, is_derived] (note: is_derived is false for deriveds, too, if they were overridden via assignment)
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Value, [any, boolean]>}
     */
    ge(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any signals (sources and deriveds) that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Value, any>}
     */
    ge(this, "previous", /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<(batch: Batch) => void>}
     */
    G(this, Ir, /* @__PURE__ */ new Set());
    /**
     * If a fork is discarded, we need to destroy any effects that are no longer needed
     * @type {Set<(batch: Batch) => void>}
     */
    G(this, Pr, /* @__PURE__ */ new Set());
    /**
     * Callbacks that should run only when a fork is committed.
     * @type {Set<(batch: Batch) => void>}
     */
    G(this, fr, /* @__PURE__ */ new Set());
    /**
     * Async effects that are currently in flight
     * @type {Map<Effect, number>}
     */
    G(this, Pe, /* @__PURE__ */ new Map());
    /**
     * Async effects that are currently in flight, _not_ inside a pending boundary
     * @type {Map<Effect, number>}
     */
    G(this, Ae, /* @__PURE__ */ new Map());
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    G(this, dn, null);
    /**
     * The root effects that need to be flushed
     * @type {Effect[]}
     */
    G(this, Wt, []);
    /**
     * Effects created while this batch was active.
     * @type {Effect[]}
     */
    G(this, vn, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Set<Effect>}
     */
    G(this, Ke, /* @__PURE__ */ new Set());
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Set<Effect>}
     */
    G(this, Oe, /* @__PURE__ */ new Set());
    /**
     * A map of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`.
     * The value contains child effects that were dirty/maybe_dirty before being reset,
     * so they can be rescheduled if the branch survives.
     * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
     */
    G(this, Te, /* @__PURE__ */ new Map());
    /**
     * Inverse of #skipped_branches which we need to tell prior batches to unskip them when committing
     * @type {Set<Effect>}
     */
    G(this, Or, /* @__PURE__ */ new Set());
    ge(this, "is_fork", !1);
    G(this, jr, !1);
    /** @type {Set<Batch>} */
    G(this, cr, /* @__PURE__ */ new Set());
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    c(this, Te).has(e) || c(this, Te).set(e, { d: [], m: [] }), c(this, Or).delete(e);
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   * @param {(e: Effect) => void} callback
   */
  unskip_effect(e, r = (n) => this.schedule(n)) {
    var n = c(this, Te).get(e);
    if (n) {
      c(this, Te).delete(e);
      for (var i of n.d)
        xt(i, It), r(i);
      for (i of n.m)
        xt(i, De), r(i);
    }
    c(this, Or).add(e);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Value} source
   * @param {any} value
   * @param {boolean} [is_derived]
   */
  capture(e, r, n = !1) {
    e.v !== Mt && !this.previous.has(e) && this.previous.set(e, e.v), (e.f & Xe) === 0 && (this.current.set(e, [r, n]), be?.set(e, r)), this.is_fork || (e.v = r);
  }
  activate() {
    V = this;
  }
  deactivate() {
    V = null, be = null;
  }
  flush() {
    try {
      ii = !0, V = this, vt(this, wt, Bn).call(this);
    } finally {
      Ki = 0, ci = null, Br = null, Ln = null, ii = !1, V = null, be = null, gr.clear();
    }
  }
  discard() {
    for (const e of c(this, Pr)) e(this);
    c(this, Pr).clear(), c(this, fr).clear(), or.delete(this);
  }
  /**
   * @param {Effect} effect
   */
  register_created_effect(e) {
    c(this, vn).push(e);
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   */
  increment(e, r) {
    let n = c(this, Pe).get(r) ?? 0;
    if (c(this, Pe).set(r, n + 1), e) {
      let i = c(this, Ae).get(r) ?? 0;
      c(this, Ae).set(r, i + 1);
    }
  }
  /**
   * @param {boolean} blocking
   * @param {Effect} effect
   * @param {boolean} skip - whether to skip updates (because this is triggered by a stale reaction)
   */
  decrement(e, r, n) {
    let i = c(this, Pe).get(r) ?? 0;
    if (i === 1 ? c(this, Pe).delete(r) : c(this, Pe).set(r, i - 1), e) {
      let s = c(this, Ae).get(r) ?? 0;
      s === 1 ? c(this, Ae).delete(r) : c(this, Ae).set(r, s - 1);
    }
    c(this, jr) || n || (Q(this, jr, !0), pr(() => {
      Q(this, jr, !1), this.flush();
    }));
  }
  /**
   * @param {Set<Effect>} dirty_effects
   * @param {Set<Effect>} maybe_dirty_effects
   */
  transfer_effects(e, r) {
    for (const n of e)
      c(this, Ke).add(n);
    for (const n of r)
      c(this, Oe).add(n);
    e.clear(), r.clear();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    c(this, Ir).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    c(this, Pr).add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  on_fork_commit(e) {
    c(this, fr).add(e);
  }
  run_fork_commit_callbacks() {
    for (const e of c(this, fr)) e(this);
    c(this, fr).clear();
  }
  settled() {
    return (c(this, dn) ?? Q(this, dn, fo())).promise;
  }
  static ensure() {
    if (V === null) {
      const e = V = new Hn();
      ii || (or.add(V), on || pr(() => {
        V === e && e.flush();
      }));
    }
    return V;
  }
  apply() {
    {
      be = null;
      return;
    }
  }
  /**
   *
   * @param {Effect} effect
   */
  schedule(e) {
    if (ci = e, e.b?.is_pending && (e.f & (Hr | Yn | co)) !== 0 && (e.f & wr) === 0) {
      e.b.defer_effect(e);
      return;
    }
    for (var r = e; r.parent !== null; ) {
      r = r.parent;
      var n = r.f;
      if (Br !== null && r === W && (X === null || (X.f & Pt) === 0))
        return;
      if ((n & (tr | ye)) !== 0) {
        if ((n & At) === 0)
          return;
        r.f ^= At;
      }
    }
    c(this, Wt).push(r);
  }
};
Ir = new WeakMap(), Pr = new WeakMap(), fr = new WeakMap(), Pe = new WeakMap(), Ae = new WeakMap(), dn = new WeakMap(), Wt = new WeakMap(), vn = new WeakMap(), Ke = new WeakMap(), Oe = new WeakMap(), Te = new WeakMap(), Or = new WeakMap(), jr = new WeakMap(), cr = new WeakMap(), wt = new WeakSet(), Nn = function() {
  return this.is_fork || c(this, Ae).size > 0;
}, mo = function() {
  for (const n of c(this, cr))
    for (const i of c(n, Ae).keys()) {
      for (var e = !1, r = i; r.parent !== null; ) {
        if (c(this, Te).has(r)) {
          e = !0;
          break;
        }
        r = r.parent;
      }
      if (!e)
        return !0;
    }
  return !1;
}, Bn = function() {
  var o;
  if (Ki++ > 1e3 && (or.delete(this), la()), !vt(this, wt, Nn).call(this)) {
    for (const l of c(this, Ke))
      c(this, Oe).delete(l), xt(l, It), this.schedule(l);
    for (const l of c(this, Oe))
      xt(l, De), this.schedule(l);
  }
  const e = c(this, Wt);
  Q(this, Wt, []), this.apply();
  var r = Br = [], n = [], i = Ln = [];
  for (const l of e)
    try {
      vt(this, wt, di).call(this, l, r, n);
    } catch (f) {
      throw Eo(l), f;
    }
  if (V = null, i.length > 0) {
    var s = Hn.ensure();
    for (const l of i)
      s.schedule(l);
  }
  if (Br = null, Ln = null, vt(this, wt, Nn).call(this) || vt(this, wt, mo).call(this)) {
    vt(this, wt, Rn).call(this, n), vt(this, wt, Rn).call(this, r);
    for (const [l, f] of c(this, Te))
      ko(l, f);
  } else {
    c(this, Pe).size === 0 && or.delete(this), c(this, Ke).clear(), c(this, Oe).clear();
    for (const l of c(this, Ir)) l(this);
    c(this, Ir).clear(), Qi(n), Qi(r), c(this, dn)?.resolve();
  }
  var a = (
    /** @type {Batch | null} */
    /** @type {unknown} */
    V
  );
  if (c(this, Wt).length > 0) {
    const l = a ?? (a = this);
    c(l, Wt).push(...c(this, Wt).filter((f) => !c(l, Wt).includes(f)));
  }
  a !== null && (or.add(a), vt(o = a, wt, Bn).call(o));
}, /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 * @param {Effect[]} effects
 * @param {Effect[]} render_effects
 */
di = function(e, r, n) {
  e.f ^= At;
  for (var i = e.first; i !== null; ) {
    var s = i.f, a = (s & (ye | tr)) !== 0, o = a && (s & At) !== 0, l = o || (s & jt) !== 0 || c(this, Te).has(i);
    if (!l && i.fn !== null) {
      a ? i.f ^= At : (s & Hr) !== 0 ? r.push(i) : xn(i) && ((s & Se) !== 0 && c(this, Oe).add(i), Yr(i));
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
Rn = function(e) {
  for (var r = 0; r < e.length; r += 1)
    yo(e[r], c(this, Ke), c(this, Oe));
}, sa = function() {
  var p, v, h;
  for (const m of or) {
    var e = m.id < this.id, r = [];
    for (const [b, [L, B]] of this.current) {
      if (m.current.has(b)) {
        var n = (
          /** @type {[any, boolean]} */
          m.current.get(b)[0]
        );
        if (e && L !== n)
          m.current.set(b, [L, B]);
        else
          continue;
      }
      r.push(b);
    }
    var i = [...m.current.keys()].filter((b) => !this.current.has(b));
    if (i.length === 0)
      e && m.discard();
    else if (r.length > 0) {
      if (e)
        for (const b of c(this, Or))
          m.unskip_effect(b, (L) => {
            var B;
            (L.f & (Se | ln)) !== 0 ? m.schedule(L) : vt(B = m, wt, Rn).call(B, [L]);
          });
      m.activate();
      var s = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map();
      for (var o of r)
        wo(o, i, s, a);
      a = /* @__PURE__ */ new Map();
      var l = [...m.current.keys()].filter(
        (b) => this.current.has(b) ? (
          /** @type {[any, boolean]} */
          this.current.get(b)[0] !== b
        ) : !0
      );
      for (const b of c(this, vn))
        (b.f & (ve | jt | fi)) === 0 && Ci(b, l, a) && ((b.f & (ln | Se)) !== 0 ? (xt(b, It), m.schedule(b)) : c(m, Ke).add(b));
      if (c(m, Wt).length > 0) {
        m.apply();
        for (var f of c(m, Wt))
          vt(p = m, wt, di).call(p, f, [], []);
        Q(m, Wt, []);
      }
      m.deactivate();
    }
  }
  for (const m of or)
    c(m, cr).has(this) && (c(m, cr).delete(this), c(m, cr).size === 0 && !vt(v = m, wt, Nn).call(v) && (m.activate(), vt(h = m, wt, Bn).call(h)));
};
let yr = Hn;
function aa(t) {
  var e = on;
  on = !0;
  try {
    for (var r; ; ) {
      if (na(), V === null)
        return (
          /** @type {T} */
          r
        );
      V.flush();
    }
  } finally {
    on = e;
  }
}
function la() {
  try {
    Hs();
  } catch (t) {
    We(t, ci);
  }
}
let Be = null;
function Qi(t) {
  var e = t.length;
  if (e !== 0) {
    for (var r = 0; r < e; ) {
      var n = t[r++];
      if ((n.f & (ve | jt)) === 0 && xn(n) && (Be = /* @__PURE__ */ new Set(), Yr(n), n.deps === null && n.first === null && n.nodes === null && n.teardown === null && n.ac === null && Jo(n), Be?.size > 0)) {
        gr.clear();
        for (const i of Be) {
          if ((i.f & (ve | jt)) !== 0) continue;
          const s = [i];
          let a = i.parent;
          for (; a !== null; )
            Be.has(a) && (Be.delete(a), s.push(a)), a = a.parent;
          for (let o = s.length - 1; o >= 0; o--) {
            const l = s[o];
            (l.f & (ve | jt)) === 0 && Yr(l);
          }
        }
        Be.clear();
      }
    }
    Be = null;
  }
}
function wo(t, e, r, n) {
  if (!r.has(t) && (r.add(t), t.reactions !== null))
    for (const i of t.reactions) {
      const s = i.f;
      (s & Pt) !== 0 ? wo(
        /** @type {Derived} */
        i,
        e,
        r,
        n
      ) : (s & (ln | Se)) !== 0 && (s & It) === 0 && Ci(i, e, n) && (xt(i, It), Mi(
        /** @type {Effect} */
        i
      ));
    }
}
function Ci(t, e, r) {
  const n = r.get(t);
  if (n !== void 0) return n;
  if (t.deps !== null)
    for (const i of t.deps) {
      if (Ur.call(e, i))
        return !0;
      if ((i.f & Pt) !== 0 && Ci(
        /** @type {Derived} */
        i,
        e,
        r
      ))
        return r.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return r.set(t, !1), !1;
}
function Mi(t) {
  V.schedule(t);
}
function ko(t, e) {
  if (!((t.f & ye) !== 0 && (t.f & At) !== 0)) {
    (t.f & It) !== 0 ? e.d.push(t) : (t.f & De) !== 0 && e.m.push(t), xt(t, At);
    for (var r = t.first; r !== null; )
      ko(r, e), r = r.next;
  }
}
function Eo(t) {
  xt(t, At);
  for (var e = t.first; e !== null; )
    Eo(e), e = e.next;
}
function ua(t) {
  let e = 0, r = mr(0), n;
  return () => {
    Li() && (u(r), Bi(() => (e === 0 && (n = ji(() => t(() => sn(r)))), e += 1, () => {
      pr(() => {
        e -= 1, e === 0 && (n?.(), n = void 0, sn(r));
      });
    })));
  };
}
var fa = Jr | Gr;
function ca(t, e, r, n) {
  new da(t, e, r, n);
}
var se, wi, ae, dr, Ut, le, Ot, Zt, je, vr, Qe, Fr, hn, pn, Fe, Jn, _t, va, ha, pa, vi, In, Pn, hi, pi;
class da {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, r, n, i) {
    G(this, _t);
    /** @type {Boundary | null} */
    ge(this, "parent");
    ge(this, "is_pending", !1);
    /**
     * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
     * Inherited from parent boundary, or defaults to identity.
     * @type {(error: unknown) => unknown}
     */
    ge(this, "transform_error");
    /** @type {TemplateNode} */
    G(this, se);
    /** @type {TemplateNode | null} */
    G(this, wi, null);
    /** @type {BoundaryProps} */
    G(this, ae);
    /** @type {((anchor: Node) => void)} */
    G(this, dr);
    /** @type {Effect} */
    G(this, Ut);
    /** @type {Effect | null} */
    G(this, le, null);
    /** @type {Effect | null} */
    G(this, Ot, null);
    /** @type {Effect | null} */
    G(this, Zt, null);
    /** @type {DocumentFragment | null} */
    G(this, je, null);
    G(this, vr, 0);
    G(this, Qe, 0);
    G(this, Fr, !1);
    /** @type {Set<Effect>} */
    G(this, hn, /* @__PURE__ */ new Set());
    /** @type {Set<Effect>} */
    G(this, pn, /* @__PURE__ */ new Set());
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    G(this, Fe, null);
    G(this, Jn, ua(() => (Q(this, Fe, mr(c(this, vr))), () => {
      Q(this, Fe, null);
    })));
    Q(this, se, e), Q(this, ae, r), Q(this, dr, (s) => {
      var a = (
        /** @type {Effect} */
        W
      );
      a.b = this, a.f |= li, n(s);
    }), this.parent = /** @type {Effect} */
    W.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), Q(this, Ut, Ri(() => {
      vt(this, _t, vi).call(this);
    }, fa));
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    yo(e, c(this, hn), c(this, pn));
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!c(this, ae).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   * @param {Batch} batch
   */
  update_pending_count(e, r) {
    vt(this, _t, hi).call(this, e, r), Q(this, vr, c(this, vr) + e), !(!c(this, Fe) || c(this, Fr)) && (Q(this, Fr, !0), pr(() => {
      Q(this, Fr, !1), c(this, Fe) && Vr(c(this, Fe), c(this, vr));
    }));
  }
  get_effect_pending() {
    return c(this, Jn).call(this), u(
      /** @type {Source<number>} */
      c(this, Fe)
    );
  }
  /** @param {unknown} error */
  error(e) {
    if (!c(this, ae).onerror && !c(this, ae).failed)
      throw e;
    V?.is_fork ? (c(this, le) && V.skip_effect(c(this, le)), c(this, Ot) && V.skip_effect(c(this, Ot)), c(this, Zt) && V.skip_effect(c(this, Zt)), V.on_fork_commit(() => {
      vt(this, _t, pi).call(this, e);
    })) : vt(this, _t, pi).call(this, e);
  }
}
se = new WeakMap(), wi = new WeakMap(), ae = new WeakMap(), dr = new WeakMap(), Ut = new WeakMap(), le = new WeakMap(), Ot = new WeakMap(), Zt = new WeakMap(), je = new WeakMap(), vr = new WeakMap(), Qe = new WeakMap(), Fr = new WeakMap(), hn = new WeakMap(), pn = new WeakMap(), Fe = new WeakMap(), Jn = new WeakMap(), _t = new WeakSet(), va = function() {
  try {
    Q(this, le, ce(() => c(this, dr).call(this, c(this, se))));
  } catch (e) {
    this.error(e);
  }
}, /**
 * @param {unknown} error The deserialized error from the server's hydration comment
 */
ha = function(e) {
  const r = c(this, ae).failed;
  r && Q(this, Zt, ce(() => {
    r(
      c(this, se),
      () => e,
      () => () => {
      }
    );
  }));
}, pa = function() {
  const e = c(this, ae).pending;
  e && (this.is_pending = !0, Q(this, Ot, ce(() => e(c(this, se)))), pr(() => {
    var r = Q(this, je, document.createDocumentFragment()), n = ze();
    r.append(n), Q(this, le, vt(this, _t, Pn).call(this, () => ce(() => c(this, dr).call(this, n)))), c(this, Qe) === 0 && (c(this, se).before(r), Q(this, je, null), _r(
      /** @type {Effect} */
      c(this, Ot),
      () => {
        Q(this, Ot, null);
      }
    ), vt(this, _t, In).call(
      this,
      /** @type {Batch} */
      V
    ));
  }));
}, vi = function() {
  try {
    if (this.is_pending = this.has_pending_snippet(), Q(this, Qe, 0), Q(this, vr, 0), Q(this, le, ce(() => {
      c(this, dr).call(this, c(this, se));
    })), c(this, Qe) > 0) {
      var e = Q(this, je, document.createDocumentFragment());
      Oi(c(this, le), e);
      const r = (
        /** @type {(anchor: Node) => void} */
        c(this, ae).pending
      );
      Q(this, Ot, ce(() => r(c(this, se))));
    } else
      vt(this, _t, In).call(
        this,
        /** @type {Batch} */
        V
      );
  } catch (r) {
    this.error(r);
  }
}, /**
 * @param {Batch} batch
 */
In = function(e) {
  this.is_pending = !1, e.transfer_effects(c(this, hn), c(this, pn));
}, /**
 * @template T
 * @param {() => T} fn
 */
Pn = function(e) {
  var r = W, n = X, i = zt;
  Le(c(this, Ut)), pe(c(this, Ut)), $r(c(this, Ut).ctx);
  try {
    return yr.ensure(), e();
  } catch (s) {
    return bo(s), null;
  } finally {
    Le(r), pe(n), $r(i);
  }
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 * @param {Batch} batch
 */
hi = function(e, r) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && vt(n = this.parent, _t, hi).call(n, e, r);
    return;
  }
  Q(this, Qe, c(this, Qe) + e), c(this, Qe) === 0 && (vt(this, _t, In).call(this, r), c(this, Ot) && _r(c(this, Ot), () => {
    Q(this, Ot, null);
  }), c(this, je) && (c(this, se).before(c(this, je)), Q(this, je, null)));
}, /**
 * @param {unknown} error
 */
pi = function(e) {
  c(this, le) && (Jt(c(this, le)), Q(this, le, null)), c(this, Ot) && (Jt(c(this, Ot)), Q(this, Ot, null)), c(this, Zt) && (Jt(c(this, Zt)), Q(this, Zt, null));
  var r = c(this, ae).onerror;
  let n = c(this, ae).failed;
  var i = !1, s = !1;
  const a = () => {
    if (i) {
      ea();
      return;
    }
    i = !0, s && Ys(), c(this, Zt) !== null && _r(c(this, Zt), () => {
      Q(this, Zt, null);
    }), vt(this, _t, Pn).call(this, () => {
      vt(this, _t, vi).call(this);
    });
  }, o = (l) => {
    try {
      s = !0, r?.(l, a), s = !1;
    } catch (f) {
      We(f, c(this, Ut) && c(this, Ut).parent);
    }
    n && Q(this, Zt, vt(this, _t, Pn).call(this, () => {
      try {
        return ce(() => {
          var f = (
            /** @type {Effect} */
            W
          );
          f.b = this, f.f |= li, n(
            c(this, se),
            () => l,
            () => a
          );
        });
      } catch (f) {
        return We(
          f,
          /** @type {Effect} */
          c(this, Ut).parent
        ), null;
      }
    }));
  };
  pr(() => {
    var l;
    try {
      l = this.transform_error(e);
    } catch (f) {
      We(f, c(this, Ut) && c(this, Ut).parent);
      return;
    }
    l !== null && typeof l == "object" && typeof /** @type {any} */
    l.then == "function" ? l.then(
      o,
      /** @param {unknown} e */
      (f) => We(f, c(this, Ut) && c(this, Ut).parent)
    ) : o(l);
  });
};
function ga(t, e, r, n) {
  const i = Si;
  var s = t.filter((h) => !h.settled);
  if (r.length === 0 && s.length === 0) {
    n(e.map(i));
    return;
  }
  var a = (
    /** @type {Effect} */
    W
  ), o = _a(), l = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((h) => h.promise)) : null;
  function f(h) {
    o();
    try {
      n(h);
    } catch (m) {
      (a.f & ve) === 0 && We(m, a);
    }
    Un();
  }
  if (r.length === 0) {
    l.then(() => f(e.map(i)));
    return;
  }
  var p = Ao();
  function v() {
    Promise.all(r.map((h) => /* @__PURE__ */ ba(h))).then((h) => f([...e.map(i), ...h])).catch((h) => We(h, a)).finally(() => p());
  }
  l ? l.then(() => {
    o(), v(), Un();
  }) : v();
}
function _a() {
  var t = (
    /** @type {Effect} */
    W
  ), e = X, r = zt, n = (
    /** @type {Batch} */
    V
  );
  return function(s = !0) {
    Le(t), pe(e), $r(r), s && (t.f & ve) === 0 && (n?.activate(), n?.apply());
  };
}
function Un(t = !0) {
  Le(null), pe(null), $r(null), t && V?.deactivate();
}
function Ao() {
  var t = (
    /** @type {Effect} */
    W
  ), e = (
    /** @type {Boundary} */
    t.b
  ), r = (
    /** @type {Batch} */
    V
  ), n = e.is_rendered();
  return e.update_pending_count(1, r), r.increment(n, t), (i = !1) => {
    e.update_pending_count(-1, r), r.decrement(n, t, i);
  };
}
// @__NO_SIDE_EFFECTS__
function Si(t) {
  var e = Pt | It;
  return W !== null && (W.f |= Gr), {
    ctx: zt,
    deps: null,
    effects: null,
    equals: ho,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Mt
    ),
    wv: 0,
    parent: W,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function ba(t, e, r) {
  let n = (
    /** @type {Effect | null} */
    W
  );
  n === null && Ps();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = mr(
    /** @type {V} */
    Mt
  ), a = !X, o = /* @__PURE__ */ new Map();
  return La(() => {
    var l = (
      /** @type {Effect} */
      W
    ), f = fo();
    i = f.promise;
    try {
      Promise.resolve(t()).then(f.resolve, f.reject).finally(Un);
    } catch (m) {
      f.reject(m), Un();
    }
    var p = (
      /** @type {Batch} */
      V
    );
    if (a) {
      if ((l.f & wr) !== 0)
        var v = Ao();
      if (
        /** @type {Boundary} */
        n.b.is_rendered()
      )
        o.get(p)?.reject(Ie), o.delete(p);
      else {
        for (const m of o.values())
          m.reject(Ie);
        o.clear();
      }
      o.set(p, f);
    }
    const h = (m, b = void 0) => {
      if (v) {
        var L = b === Ie;
        v(L);
      }
      if (!(b === Ie || (l.f & ve) !== 0)) {
        if (p.activate(), b)
          s.f |= Xe, Vr(s, b);
        else {
          (s.f & Xe) !== 0 && (s.f ^= Xe), Vr(s, m);
          for (const [B, $] of o) {
            if (o.delete(B), B === p) break;
            $.reject(Ie);
          }
        }
        p.deactivate();
      }
    };
    f.promise.then(h, (m) => h(null, m || "unknown"));
  }), Ni(() => {
    for (const l of o.values())
      l.reject(Ie);
  }), new Promise((l) => {
    function f(p) {
      function v() {
        p === i ? l(s) : f(i);
      }
      p.then(v, v);
    }
    f(i);
  });
}
// @__NO_SIDE_EFFECTS__
function On(t) {
  const e = /* @__PURE__ */ Si(t);
  return Yo(e), e;
}
// @__NO_SIDE_EFFECTS__
function xa(t) {
  const e = /* @__PURE__ */ Si(t);
  return e.equals = po, e;
}
function ya(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var r = 0; r < e.length; r += 1)
      Jt(
        /** @type {Effect} */
        e[r]
      );
  }
}
function Di(t) {
  var e, r = W, n = t.parent;
  if (!er && n !== null && (n.f & (ve | jt)) !== 0)
    return zs(), t.v;
  Le(n);
  try {
    t.f &= ~xr, ya(t), e = Qo(t);
  } finally {
    Le(r);
  }
  return e;
}
function To(t) {
  var e = Di(t);
  if (!t.equals(e) && (t.wv = qo(), (!V?.is_fork || t.deps === null) && (V !== null ? V.capture(t, e, !0) : t.v = e, t.deps === null))) {
    xt(t, At);
    return;
  }
  er || (be !== null ? (Li() || V?.is_fork) && be.set(t, e) : Ti(t));
}
function ma(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(Ie), e.teardown = Ls, e.ac = null, un(e, 0), Ii(e));
}
function Co(t) {
  if (t.effects !== null)
    for (const e of t.effects)
      e.teardown && Yr(e);
}
let gi = /* @__PURE__ */ new Set();
const gr = /* @__PURE__ */ new Map();
let Mo = !1;
function mr(t, e) {
  var r = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ho,
    rv: 0,
    wv: 0
  };
  return r;
}
// @__NO_SIDE_EFFECTS__
function O(t, e) {
  const r = mr(t);
  return Yo(r), r;
}
// @__NO_SIDE_EFFECTS__
function wa(t, e = !1, r = !0) {
  const n = mr(t);
  return e || (n.equals = po), n;
}
function E(t, e, r = !1) {
  X !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!xe || (X.f & fi) !== 0) && go() && (X.f & (Pt | Se | ln | fi)) !== 0 && (he === null || !Ur.call(he, t)) && Vs();
  let n = r ? Me(e) : e;
  return Vr(t, n, Ln);
}
function Vr(t, e, r = null) {
  if (!t.equals(e)) {
    gr.set(t, er ? e : t.v);
    var n = yr.ensure();
    if (n.capture(t, e), (t.f & Pt) !== 0) {
      const i = (
        /** @type {Derived} */
        t
      );
      (t.f & It) !== 0 && Di(i), be === null && Ti(i);
    }
    t.wv = qo(), Do(t, It, r), W !== null && (W.f & At) !== 0 && (W.f & (ye | tr)) === 0 && (oe === null ? Ba([t]) : oe.push(t)), !n.is_fork && gi.size > 0 && !Mo && ka();
  }
  return e;
}
function ka() {
  Mo = !1;
  for (const t of gi)
    (t.f & At) !== 0 && xt(t, De), xn(t) && Yr(t);
  gi.clear();
}
function So(t, e = 1) {
  var r = u(t);
  return E(t, e === 1 ? ++r : --r);
}
function sn(t) {
  E(t, t.v + 1);
}
function Do(t, e, r) {
  var n = t.reactions;
  if (n !== null)
    for (var i = n.length, s = 0; s < i; s++) {
      var a = n[s], o = a.f, l = (o & It) === 0;
      if (l && xt(a, e), (o & Pt) !== 0) {
        var f = (
          /** @type {Derived} */
          a
        );
        be?.delete(f), (o & xr) === 0 && (o & de && (W === null || (W.f & Fn) === 0) && (a.f |= xr), Do(f, De, r));
      } else if (l) {
        var p = (
          /** @type {Effect} */
          a
        );
        (o & Se) !== 0 && Be !== null && Be.add(p), r !== null ? r.push(p) : Mi(p);
      }
    }
}
function Me(t) {
  if (typeof t != "object" || t === null || Rr in t)
    return t;
  const e = uo(t);
  if (e !== Ss && e !== Ds)
    return t;
  var r = /* @__PURE__ */ new Map(), n = ki(t), i = /* @__PURE__ */ O(0), s = br, a = (o) => {
    if (br === s)
      return o();
    var l = X, f = br;
    pe(null), to(s);
    var p = o();
    return pe(l), to(f), p;
  };
  return n && r.set("length", /* @__PURE__ */ O(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(o, l, f) {
        (!("value" in f) || f.configurable === !1 || f.enumerable === !1 || f.writable === !1) && Js();
        var p = r.get(l);
        return p === void 0 ? a(() => {
          var v = /* @__PURE__ */ O(f.value);
          return r.set(l, v), v;
        }) : E(p, f.value, !0), !0;
      },
      deleteProperty(o, l) {
        var f = r.get(l);
        if (f === void 0) {
          if (l in o) {
            const p = a(() => /* @__PURE__ */ O(Mt));
            r.set(l, p), sn(i);
          }
        } else
          E(f, Mt), sn(i);
        return !0;
      },
      get(o, l, f) {
        if (l === Rr)
          return t;
        var p = r.get(l), v = l in o;
        if (p === void 0 && (!v || nn(o, l)?.writable) && (p = a(() => {
          var m = Me(v ? o[l] : Mt), b = /* @__PURE__ */ O(m);
          return b;
        }), r.set(l, p)), p !== void 0) {
          var h = u(p);
          return h === Mt ? void 0 : h;
        }
        return Reflect.get(o, l, f);
      },
      getOwnPropertyDescriptor(o, l) {
        var f = Reflect.getOwnPropertyDescriptor(o, l);
        if (f && "value" in f) {
          var p = r.get(l);
          p && (f.value = u(p));
        } else if (f === void 0) {
          var v = r.get(l), h = v?.v;
          if (v !== void 0 && h !== Mt)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return f;
      },
      has(o, l) {
        if (l === Rr)
          return !0;
        var f = r.get(l), p = f !== void 0 && f.v !== Mt || Reflect.has(o, l);
        if (f !== void 0 || W !== null && (!p || nn(o, l)?.writable)) {
          f === void 0 && (f = a(() => {
            var h = p ? Me(o[l]) : Mt, m = /* @__PURE__ */ O(h);
            return m;
          }), r.set(l, f));
          var v = u(f);
          if (v === Mt)
            return !1;
        }
        return p;
      },
      set(o, l, f, p) {
        var v = r.get(l), h = l in o;
        if (n && l === "length")
          for (var m = f; m < /** @type {Source<number>} */
          v.v; m += 1) {
            var b = r.get(m + "");
            b !== void 0 ? E(b, Mt) : m in o && (b = a(() => /* @__PURE__ */ O(Mt)), r.set(m + "", b));
          }
        if (v === void 0)
          (!h || nn(o, l)?.writable) && (v = a(() => /* @__PURE__ */ O(void 0)), E(v, Me(f)), r.set(l, v));
        else {
          h = v.v !== Mt;
          var L = a(() => Me(f));
          E(v, L);
        }
        var B = Reflect.getOwnPropertyDescriptor(o, l);
        if (B?.set && B.set.call(p, f), !h) {
          if (n && typeof l == "string") {
            var $ = (
              /** @type {Source<number>} */
              r.get("length")
            ), F = Number(l);
            Number.isInteger(F) && F >= $.v && E($, F + 1);
          }
          sn(i);
        }
        return !0;
      },
      ownKeys(o) {
        u(i);
        var l = Reflect.ownKeys(o).filter((v) => {
          var h = r.get(v);
          return h === void 0 || h.v !== Mt;
        });
        for (var [f, p] of r)
          p.v !== Mt && !(f in o) && l.push(f);
        return l;
      },
      setPrototypeOf() {
        $s();
      }
    }
  );
}
function Wi(t) {
  try {
    if (t !== null && typeof t == "object" && Rr in t)
      return t[Rr];
  } catch {
  }
  return t;
}
function Ea(t, e) {
  return Object.is(Wi(t), Wi(e));
}
var Zi, Lo, No, Bo;
function Aa() {
  if (Zi === void 0) {
    Zi = window, Lo = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, r = Text.prototype;
    No = nn(e, "firstChild").get, Bo = nn(e, "nextSibling").get, Gi(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), Gi(r) && (r.__t = void 0);
  }
}
function ze(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function Ze(t) {
  return (
    /** @type {TemplateNode | null} */
    No.call(t)
  );
}
// @__NO_SIDE_EFFECTS__
function bn(t) {
  return (
    /** @type {TemplateNode | null} */
    Bo.call(t)
  );
}
function y(t, e) {
  return /* @__PURE__ */ Ze(t);
}
function ie(t, e = !1) {
  {
    var r = /* @__PURE__ */ Ze(t);
    return r instanceof Comment && r.data === "" ? /* @__PURE__ */ bn(r) : r;
  }
}
function A(t, e = 1, r = !1) {
  let n = t;
  for (; e--; )
    n = /** @type {TemplateNode} */
    /* @__PURE__ */ bn(n);
  return n;
}
function Ta(t) {
  t.textContent = "";
}
function Ro() {
  return !1;
}
function Io(t, e, r) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(e ?? vo, t, void 0)
  );
}
let Xi = !1;
function Ca() {
  Xi || (Xi = !0, document.addEventListener(
    "reset",
    (t) => {
      Promise.resolve().then(() => {
        if (!t.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            t.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Gn(t) {
  var e = X, r = W;
  pe(null), Le(null);
  try {
    return t();
  } finally {
    pe(e), Le(r);
  }
}
function Po(t, e, r, n = r) {
  t.addEventListener(e, () => Gn(r));
  const i = t.__on_r;
  i ? t.__on_r = () => {
    i(), n(!0);
  } : t.__on_r = () => n(!0), Ca();
}
function Ma(t) {
  W === null && (X === null && Us(), Fs()), er && js();
}
function Sa(t, e) {
  var r = e.last;
  r === null ? e.last = e.first = t : (r.next = t, t.prev = r, e.last = t);
}
function He(t, e) {
  var r = W;
  r !== null && (r.f & jt) !== 0 && (t |= jt);
  var n = {
    ctx: zt,
    deps: null,
    nodes: null,
    f: t | It | de,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  V?.register_created_effect(n);
  var i = n;
  if ((t & Hr) !== 0)
    Br !== null ? Br.push(n) : yr.ensure().schedule(n);
  else if (e !== null) {
    try {
      Yr(n);
    } catch (a) {
      throw Jt(n), a;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & Gr) === 0 && (i = i.first, (t & Se) !== 0 && (t & Jr) !== 0 && i !== null && (i.f |= Jr));
  }
  if (i !== null && (i.parent = r, r !== null && Sa(i, r), X !== null && (X.f & Pt) !== 0 && (t & tr) === 0)) {
    var s = (
      /** @type {Derived} */
      X
    );
    (s.effects ?? (s.effects = [])).push(i);
  }
  return n;
}
function Li() {
  return X !== null && !xe;
}
function Ni(t) {
  const e = He(Yn, null);
  return xt(e, At), e.teardown = t, e;
}
function Oo(t) {
  Ma();
  var e = (
    /** @type {Effect} */
    W.f
  ), r = !X && (e & ye) !== 0 && (e & wr) === 0;
  if (r) {
    var n = (
      /** @type {ComponentContext} */
      zt
    );
    (n.e ?? (n.e = [])).push(t);
  } else
    return jo(t);
}
function jo(t) {
  return He(Hr | Rs, t);
}
function Da(t) {
  yr.ensure();
  const e = He(tr | Gr, t);
  return (r = {}) => new Promise((n) => {
    r.outro ? _r(e, () => {
      Jt(e), n(void 0);
    }) : (Jt(e), n(void 0));
  });
}
function Fo(t) {
  return He(Hr, t);
}
function La(t) {
  return He(ln | Gr, t);
}
function Bi(t, e = 0) {
  return He(Yn | e, t);
}
function q(t, e = [], r = [], n = []) {
  ga(n, e, r, (i) => {
    He(Yn, () => t(...i.map(u)));
  });
}
function Ri(t, e = 0) {
  var r = He(Se | e, t);
  return r;
}
function ce(t) {
  return He(ye | Gr, t);
}
function Uo(t) {
  var e = t.teardown;
  if (e !== null) {
    const r = er, n = X;
    zi(!0), pe(null);
    try {
      e.call(null);
    } finally {
      zi(r), pe(n);
    }
  }
}
function Ii(t, e = !1) {
  var r = t.first;
  for (t.first = t.last = null; r !== null; ) {
    const i = r.ac;
    i !== null && Gn(() => {
      i.abort(Ie);
    });
    var n = r.next;
    (r.f & tr) !== 0 ? r.parent = null : Jt(r, e), r = n;
  }
}
function Na(t) {
  for (var e = t.first; e !== null; ) {
    var r = e.next;
    (e.f & ye) === 0 && Jt(e), e = r;
  }
}
function Jt(t, e = !0) {
  var r = !1;
  (e || (t.f & Bs) !== 0) && t.nodes !== null && t.nodes.end !== null && (Ho(
    t.nodes.start,
    /** @type {TemplateNode} */
    t.nodes.end
  ), r = !0), xt(t, ui), Ii(t, e && !r), un(t, 0);
  var n = t.nodes && t.nodes.t;
  if (n !== null)
    for (const s of n)
      s.stop();
  Uo(t), t.f ^= ui, t.f |= ve;
  var i = t.parent;
  i !== null && i.first !== null && Jo(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes = t.ac = t.b = null;
}
function Ho(t, e) {
  for (; t !== null; ) {
    var r = t === e ? null : /* @__PURE__ */ bn(t);
    t.remove(), t = r;
  }
}
function Jo(t) {
  var e = t.parent, r = t.prev, n = t.next;
  r !== null && (r.next = n), n !== null && (n.prev = r), e !== null && (e.first === t && (e.first = n), e.last === t && (e.last = r));
}
function _r(t, e, r = !0) {
  var n = [];
  $o(t, n, !0);
  var i = () => {
    r && Jt(t), e && e();
  }, s = n.length;
  if (s > 0) {
    var a = () => --s || i();
    for (var o of n)
      o.out(a);
  } else
    i();
}
function $o(t, e, r) {
  if ((t.f & jt) === 0) {
    t.f ^= jt;
    var n = t.nodes && t.nodes.t;
    if (n !== null)
      for (const o of n)
        (o.is_global || r) && e.push(o);
    for (var i = t.first; i !== null; ) {
      var s = i.next;
      if ((i.f & tr) === 0) {
        var a = (i.f & Jr) !== 0 || // If this is a branch effect without a block effect parent,
        // it means the parent block effect was pruned. In that case,
        // transparency information was transferred to the branch effect.
        (i.f & ye) !== 0 && (t.f & Se) !== 0;
        $o(i, e, a ? r : !1);
      }
      i = s;
    }
  }
}
function Pi(t) {
  Vo(t, !0);
}
function Vo(t, e) {
  if ((t.f & jt) !== 0) {
    t.f ^= jt, (t.f & At) === 0 && (xt(t, It), yr.ensure().schedule(t));
    for (var r = t.first; r !== null; ) {
      var n = r.next, i = (r.f & Jr) !== 0 || (r.f & ye) !== 0;
      Vo(r, i ? e : !1), r = n;
    }
    var s = t.nodes && t.nodes.t;
    if (s !== null)
      for (const a of s)
        (a.is_global || e) && a.in();
  }
}
function Oi(t, e) {
  if (t.nodes)
    for (var r = t.nodes.start, n = t.nodes.end; r !== null; ) {
      var i = r === n ? null : /* @__PURE__ */ bn(r);
      e.append(r), r = i;
    }
}
let jn = !1, er = !1;
function zi(t) {
  er = t;
}
let X = null, xe = !1;
function pe(t) {
  X = t;
}
let W = null;
function Le(t) {
  W = t;
}
let he = null;
function Yo(t) {
  X !== null && (he === null ? he = [t] : he.push(t));
}
let Ht = null, Qt = 0, oe = null;
function Ba(t) {
  oe = t;
}
let Go = 1, lr = 0, br = lr;
function to(t) {
  br = t;
}
function qo() {
  return ++Go;
}
function xn(t) {
  var e = t.f;
  if ((e & It) !== 0)
    return !0;
  if (e & Pt && (t.f &= ~xr), (e & De) !== 0) {
    for (var r = (
      /** @type {Value[]} */
      t.deps
    ), n = r.length, i = 0; i < n; i++) {
      var s = r[i];
      if (xn(
        /** @type {Derived} */
        s
      ) && To(
        /** @type {Derived} */
        s
      ), s.wv > t.wv)
        return !0;
    }
    (e & de) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    be === null && xt(t, At);
  }
  return !1;
}
function Ko(t, e, r = !0) {
  var n = t.reactions;
  if (n !== null && !(he !== null && Ur.call(he, t)))
    for (var i = 0; i < n.length; i++) {
      var s = n[i];
      (s.f & Pt) !== 0 ? Ko(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (r ? xt(s, It) : (s.f & At) !== 0 && xt(s, De), Mi(
        /** @type {Effect} */
        s
      ));
    }
}
function Qo(t) {
  var L;
  var e = Ht, r = Qt, n = oe, i = X, s = he, a = zt, o = xe, l = br, f = t.f;
  Ht = /** @type {null | Value[]} */
  null, Qt = 0, oe = null, X = (f & (ye | tr)) === 0 ? t : null, he = null, $r(t.ctx), xe = !1, br = ++lr, t.ac !== null && (Gn(() => {
    t.ac.abort(Ie);
  }), t.ac = null);
  try {
    t.f |= Fn;
    var p = (
      /** @type {Function} */
      t.fn
    ), v = p();
    t.f |= wr;
    var h = t.deps, m = V?.is_fork;
    if (Ht !== null) {
      var b;
      if (m || un(t, Qt), h !== null && Qt > 0)
        for (h.length = Qt + Ht.length, b = 0; b < Ht.length; b++)
          h[Qt + b] = Ht[b];
      else
        t.deps = h = Ht;
      if (Li() && (t.f & de) !== 0)
        for (b = Qt; b < h.length; b++)
          ((L = h[b]).reactions ?? (L.reactions = [])).push(t);
    } else !m && h !== null && Qt < h.length && (un(t, Qt), h.length = Qt);
    if (go() && oe !== null && !xe && h !== null && (t.f & (Pt | De | It)) === 0)
      for (b = 0; b < /** @type {Source[]} */
      oe.length; b++)
        Ko(
          oe[b],
          /** @type {Effect} */
          t
        );
    if (i !== null && i !== t) {
      if (lr++, i.deps !== null)
        for (let B = 0; B < r; B += 1)
          i.deps[B].rv = lr;
      if (e !== null)
        for (const B of e)
          B.rv = lr;
      oe !== null && (n === null ? n = oe : n.push(.../** @type {Source[]} */
      oe));
    }
    return (t.f & Xe) !== 0 && (t.f ^= Xe), v;
  } catch (B) {
    return bo(B);
  } finally {
    t.f ^= Fn, Ht = e, Qt = r, oe = n, X = i, he = s, $r(a), xe = o, br = l;
  }
}
function Ra(t, e) {
  let r = e.reactions;
  if (r !== null) {
    var n = Ts.call(r, t);
    if (n !== -1) {
      var i = r.length - 1;
      i === 0 ? r = e.reactions = null : (r[n] = r[i], r.pop());
    }
  }
  if (r === null && (e.f & Pt) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Ht === null || !Ur.call(Ht, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & de) !== 0 && (s.f ^= de, s.f &= ~xr), s.v !== Mt && Ti(s), ma(s), un(s, 0);
  }
}
function un(t, e) {
  var r = t.deps;
  if (r !== null)
    for (var n = e; n < r.length; n++)
      Ra(t, r[n]);
}
function Yr(t) {
  var e = t.f;
  if ((e & ve) === 0) {
    xt(t, At);
    var r = W, n = jn;
    W = t, jn = !0;
    try {
      (e & (Se | co)) !== 0 ? Na(t) : Ii(t), Uo(t);
      var i = Qo(t);
      t.teardown = typeof i == "function" ? i : null, t.wv = Go;
      var s;
    } finally {
      jn = n, W = r;
    }
  }
}
async function Ia() {
  await Promise.resolve(), aa();
}
function u(t) {
  var e = t.f, r = (e & Pt) !== 0;
  if (X !== null && !xe) {
    var n = W !== null && (W.f & ve) !== 0;
    if (!n && (he === null || !Ur.call(he, t))) {
      var i = X.deps;
      if ((X.f & Fn) !== 0)
        t.rv < lr && (t.rv = lr, Ht === null && i !== null && i[Qt] === t ? Qt++ : Ht === null ? Ht = [t] : Ht.push(t));
      else {
        (X.deps ?? (X.deps = [])).push(t);
        var s = t.reactions;
        s === null ? t.reactions = [X] : Ur.call(s, X) || s.push(X);
      }
    }
  }
  if (er && gr.has(t))
    return gr.get(t);
  if (r) {
    var a = (
      /** @type {Derived} */
      t
    );
    if (er) {
      var o = a.v;
      return ((a.f & At) === 0 && a.reactions !== null || Zo(a)) && (o = Di(a)), gr.set(a, o), o;
    }
    var l = (a.f & de) === 0 && !xe && X !== null && (jn || (X.f & de) !== 0), f = (a.f & wr) === 0;
    xn(a) && (l && (a.f |= de), To(a)), l && !f && (Co(a), Wo(a));
  }
  if (be?.has(t))
    return be.get(t);
  if ((t.f & Xe) !== 0)
    throw t.v;
  return t.v;
}
function Wo(t) {
  if (t.f |= de, t.deps !== null)
    for (const e of t.deps)
      (e.reactions ?? (e.reactions = [])).push(t), (e.f & Pt) !== 0 && (e.f & de) === 0 && (Co(
        /** @type {Derived} */
        e
      ), Wo(
        /** @type {Derived} */
        e
      ));
}
function Zo(t) {
  if (t.v === Mt) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (gr.has(e) || (e.f & Pt) !== 0 && Zo(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function ji(t) {
  var e = xe;
  try {
    return xe = !0, t();
  } finally {
    xe = e;
  }
}
const Pa = ["touchstart", "touchmove"];
function Oa(t) {
  return Pa.includes(t);
}
const ur = Symbol("events"), Xo = /* @__PURE__ */ new Set(), _i = /* @__PURE__ */ new Set();
function ja(t, e, r, n = {}) {
  function i(s) {
    if (n.capture || bi.call(e, s), !s.cancelBubble)
      return Gn(() => r?.call(this, s));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? pr(() => {
    e.addEventListener(t, i, n);
  }) : e.addEventListener(t, i, n), i;
}
function oi(t, e, r, n, i) {
  var s = { capture: n, passive: i }, a = ja(t, e, r, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Ni(() => {
    e.removeEventListener(t, a, s);
  });
}
function nt(t, e, r) {
  (e[ur] ?? (e[ur] = {}))[t] = r;
}
function zo(t) {
  for (var e = 0; e < t.length; e++)
    Xo.add(t[e]);
  for (var r of _i)
    r(t);
}
let eo = null;
function bi(t) {
  var e = this, r = (
    /** @type {Node} */
    e.ownerDocument
  ), n = t.type, i = t.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || t.target
  );
  eo = t;
  var a = 0, o = eo === t && t[ur];
  if (o) {
    var l = i.indexOf(o);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t[ur] = e;
      return;
    }
    var f = i.indexOf(e);
    if (f === -1)
      return;
    l <= f && (a = l);
  }
  if (s = /** @type {Element} */
  i[a] || t.target, s !== e) {
    Cs(t, "currentTarget", {
      configurable: !0,
      get() {
        return s || r;
      }
    });
    var p = X, v = W;
    pe(null), Le(null);
    try {
      for (var h, m = []; s !== null; ) {
        var b = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var L = s[ur]?.[n];
          L != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === s) && L.call(s, t);
        } catch (B) {
          h ? m.push(B) : h = B;
        }
        if (t.cancelBubble || b === e || b === null)
          break;
        s = b;
      }
      if (h) {
        for (let B of m)
          queueMicrotask(() => {
            throw B;
          });
        throw h;
      }
    } finally {
      t[ur] = e, delete t.currentTarget, pe(p), Le(v);
    }
  }
}
const Fa = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (t) => t
  })
);
function Ua(t) {
  return (
    /** @type {string} */
    Fa?.createHTML(t) ?? t
  );
}
function Ha(t) {
  var e = Io("template");
  return e.innerHTML = Ua(t.replaceAll("<!>", "<!---->")), e.content;
}
function fn(t, e) {
  var r = (
    /** @type {Effect} */
    W
  );
  r.nodes === null && (r.nodes = { start: t, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function I(t, e) {
  var r = (e & Qs) !== 0, n = (e & Ws) !== 0, i, s = !t.startsWith("<!>");
  return () => {
    i === void 0 && (i = Ha(s ? t : "<!>" + t), r || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Ze(i)));
    var a = (
      /** @type {TemplateNode} */
      n || Lo ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (r) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Ze(a)
      ), l = (
        /** @type {TemplateNode} */
        a.lastChild
      );
      fn(o, l);
    } else
      fn(a, a);
    return a;
  };
}
function ro(t = "") {
  {
    var e = ze(t + "");
    return fn(e, e), e;
  }
}
function R(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function j(t, e) {
  var r = e == null ? "" : typeof e == "object" ? `${e}` : e;
  r !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = r, t.nodeValue = `${r}`);
}
function Ja(t, e) {
  return $a(t, e);
}
const Dn = /* @__PURE__ */ new Map();
function $a(t, { target: e, anchor: r, props: n = {}, events: i, context: s, intro: a = !0, transformError: o }) {
  Aa();
  var l = void 0, f = Da(() => {
    var p = r ?? e.appendChild(ze());
    ca(
      /** @type {TemplateNode} */
      p,
      {
        pending: () => {
        }
      },
      (m) => {
        Ei({});
        var b = (
          /** @type {ComponentContext} */
          zt
        );
        s && (b.c = s), i && (n.$$events = i), l = t(m, n) || {}, Ai();
      },
      o
    );
    var v = /* @__PURE__ */ new Set(), h = (m) => {
      for (var b = 0; b < m.length; b++) {
        var L = m[b];
        if (!v.has(L)) {
          v.add(L);
          var B = Oa(L);
          for (const dt of [e, document]) {
            var $ = Dn.get(dt);
            $ === void 0 && ($ = /* @__PURE__ */ new Map(), Dn.set(dt, $));
            var F = $.get(L);
            F === void 0 ? (dt.addEventListener(L, bi, { passive: B }), $.set(L, 1)) : $.set(L, F + 1);
          }
        }
      }
    };
    return h(Vn(Xo)), _i.add(h), () => {
      for (var m of v)
        for (const B of [e, document]) {
          var b = (
            /** @type {Map<string, number>} */
            Dn.get(B)
          ), L = (
            /** @type {number} */
            b.get(m)
          );
          --L == 0 ? (B.removeEventListener(m, bi), b.delete(m), b.size === 0 && Dn.delete(B)) : b.set(m, L);
        }
      _i.delete(h), p !== r && p.parentNode?.removeChild(p);
    };
  });
  return xi.set(l, f), l;
}
let xi = /* @__PURE__ */ new WeakMap();
function Va(t, e) {
  const r = xi.get(t);
  return r ? (xi.delete(t), r(e)) : Promise.resolve();
}
var _e, Ce, Xt, hr, gn, _n, $n;
class Ya {
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, r = !0) {
    /** @type {TemplateNode} */
    ge(this, "anchor");
    /** @type {Map<Batch, Key>} */
    G(this, _e, /* @__PURE__ */ new Map());
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
    G(this, Ce, /* @__PURE__ */ new Map());
    /**
     * Similar to #onscreen with respect to the keys, but contains branches that are not yet
     * in the DOM, because their insertion is deferred.
     * @type {Map<Key, Branch>}
     */
    G(this, Xt, /* @__PURE__ */ new Map());
    /**
     * Keys of effects that are currently outroing
     * @type {Set<Key>}
     */
    G(this, hr, /* @__PURE__ */ new Set());
    /**
     * Whether to pause (i.e. outro) on change, or destroy immediately.
     * This is necessary for `<svelte:element>`
     */
    G(this, gn, !0);
    /**
     * @param {Batch} batch
     */
    G(this, _n, (e) => {
      if (c(this, _e).has(e)) {
        var r = (
          /** @type {Key} */
          c(this, _e).get(e)
        ), n = c(this, Ce).get(r);
        if (n)
          Pi(n), c(this, hr).delete(r);
        else {
          var i = c(this, Xt).get(r);
          i && (c(this, Ce).set(r, i.effect), c(this, Xt).delete(r), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), n = i.effect);
        }
        for (const [s, a] of c(this, _e)) {
          if (c(this, _e).delete(s), s === e)
            break;
          const o = c(this, Xt).get(a);
          o && (Jt(o.effect), c(this, Xt).delete(a));
        }
        for (const [s, a] of c(this, Ce)) {
          if (s === r || c(this, hr).has(s)) continue;
          const o = () => {
            if (Array.from(c(this, _e).values()).includes(s)) {
              var f = document.createDocumentFragment();
              Oi(a, f), f.append(ze()), c(this, Xt).set(s, { effect: a, fragment: f });
            } else
              Jt(a);
            c(this, hr).delete(s), c(this, Ce).delete(s);
          };
          c(this, gn) || !n ? (c(this, hr).add(s), _r(a, o, !1)) : o();
        }
      }
    });
    /**
     * @param {Batch} batch
     */
    G(this, $n, (e) => {
      c(this, _e).delete(e);
      const r = Array.from(c(this, _e).values());
      for (const [n, i] of c(this, Xt))
        r.includes(n) || (Jt(i.effect), c(this, Xt).delete(n));
    });
    this.anchor = e, Q(this, gn, r);
  }
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, r) {
    var n = (
      /** @type {Batch} */
      V
    ), i = Ro();
    if (r && !c(this, Ce).has(e) && !c(this, Xt).has(e))
      if (i) {
        var s = document.createDocumentFragment(), a = ze();
        s.append(a), c(this, Xt).set(e, {
          effect: ce(() => r(a)),
          fragment: s
        });
      } else
        c(this, Ce).set(
          e,
          ce(() => r(this.anchor))
        );
    if (c(this, _e).set(n, e), i) {
      for (const [o, l] of c(this, Ce))
        o === e ? n.unskip_effect(l) : n.skip_effect(l);
      for (const [o, l] of c(this, Xt))
        o === e ? n.unskip_effect(l.effect) : n.skip_effect(l.effect);
      n.oncommit(c(this, _n)), n.ondiscard(c(this, $n));
    } else
      c(this, _n).call(this, n);
  }
}
_e = new WeakMap(), Ce = new WeakMap(), Xt = new WeakMap(), hr = new WeakMap(), gn = new WeakMap(), _n = new WeakMap(), $n = new WeakMap();
function et(t, e, r = !1) {
  var n = new Ya(t), i = r ? Jr : 0;
  function s(a, o) {
    n.ensure(a, o);
  }
  Ri(() => {
    var a = !1;
    e((o, l = 0) => {
      a = !0, s(l, o);
    }), a || s(-1, null);
  }, i);
}
function sr(t, e) {
  return e;
}
function Ga(t, e, r) {
  for (var n = [], i = e.length, s, a = e.length, o = 0; o < i; o++) {
    let v = e[o];
    _r(
      v,
      () => {
        if (s) {
          if (s.pending.delete(v), s.done.add(v), s.pending.size === 0) {
            var h = (
              /** @type {Set<EachOutroGroup>} */
              t.outrogroups
            );
            yi(t, Vn(s.done)), h.delete(s), h.size === 0 && (t.outrogroups = null);
          }
        } else
          a -= 1;
      },
      !1
    );
  }
  if (a === 0) {
    var l = n.length === 0 && r !== null;
    if (l) {
      var f = (
        /** @type {Element} */
        r
      ), p = (
        /** @type {Element} */
        f.parentNode
      );
      Ta(p), p.append(f), t.items.clear();
    }
    yi(t, e, !l);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (t.outrogroups ?? (t.outrogroups = /* @__PURE__ */ new Set())).add(s);
}
function yi(t, e, r = !0) {
  var n;
  if (t.pending.size > 0) {
    n = /* @__PURE__ */ new Set();
    for (const a of t.pending.values())
      for (const o of a)
        n.add(
          /** @type {EachItem} */
          t.items.get(o).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var s = e[i];
    if (n?.has(s)) {
      s.f |= Ue;
      const a = document.createDocumentFragment();
      Oi(s, a);
    } else
      Jt(e[i], r);
  }
}
var no;
function Re(t, e, r, n, i, s = null) {
  var a = t, o = /* @__PURE__ */ new Map();
  {
    var l = (
      /** @type {Element} */
      t
    );
    a = l.appendChild(ze());
  }
  var f = null, p = /* @__PURE__ */ xa(() => {
    var F = r();
    return ki(F) ? F : F == null ? [] : Vn(F);
  }), v, h = /* @__PURE__ */ new Map(), m = !0;
  function b(F) {
    ($.effect.f & ve) === 0 && ($.pending.delete(F), $.fallback = f, qa($, v, a, e, n), f !== null && (v.length === 0 ? (f.f & Ue) === 0 ? Pi(f) : (f.f ^= Ue, en(f, null, a)) : _r(f, () => {
      f = null;
    })));
  }
  function L(F) {
    $.pending.delete(F);
  }
  var B = Ri(() => {
    v = /** @type {V[]} */
    u(p);
    for (var F = v.length, dt = /* @__PURE__ */ new Set(), pt = (
      /** @type {Batch} */
      V
    ), lt = Ro(), bt = 0; bt < F; bt += 1) {
      var g = v[bt], w = n(g, bt), d = m ? null : o.get(w);
      d ? (d.v && Vr(d.v, g), d.i && Vr(d.i, bt), lt && pt.unskip_effect(d.e)) : (d = Ka(
        o,
        m ? a : no ?? (no = ze()),
        g,
        w,
        bt,
        i,
        e,
        r
      ), m || (d.e.f |= Ue), o.set(w, d)), dt.add(w);
    }
    if (F === 0 && s && !f && (m ? f = ce(() => s(a)) : (f = ce(() => s(no ?? (no = ze()))), f.f |= Ue)), F > dt.size && Os(), !m)
      if (h.set(pt, dt), lt) {
        for (const [k, x] of o)
          dt.has(k) || pt.skip_effect(x.e);
        pt.oncommit(b), pt.ondiscard(L);
      } else
        b(pt);
    u(p);
  }), $ = { effect: B, items: o, pending: h, outrogroups: null, fallback: f };
  m = !1;
}
function tn(t) {
  for (; t !== null && (t.f & ye) === 0; )
    t = t.next;
  return t;
}
function qa(t, e, r, n, i) {
  var s = e.length, a = t.items, o = tn(t.effect.first), l, f = null, p = [], v = [], h, m, b, L;
  for (L = 0; L < s; L += 1) {
    if (h = e[L], m = i(h, L), b = /** @type {EachItem} */
    a.get(m).e, t.outrogroups !== null)
      for (const w of t.outrogroups)
        w.pending.delete(b), w.done.delete(b);
    if ((b.f & jt) !== 0 && Pi(b), (b.f & Ue) !== 0)
      if (b.f ^= Ue, b === o)
        en(b, null, r);
      else {
        var B = f ? f.next : o;
        b === t.effect.last && (t.effect.last = b.prev), b.prev && (b.prev.next = b.next), b.next && (b.next.prev = b.prev), Ve(t, f, b), Ve(t, b, B), en(b, B, r), f = b, p = [], v = [], o = tn(f.next);
        continue;
      }
    if (b !== o) {
      if (l !== void 0 && l.has(b)) {
        if (p.length < v.length) {
          var $ = v[0], F;
          f = $.prev;
          var dt = p[0], pt = p[p.length - 1];
          for (F = 0; F < p.length; F += 1)
            en(p[F], $, r);
          for (F = 0; F < v.length; F += 1)
            l.delete(v[F]);
          Ve(t, dt.prev, pt.next), Ve(t, f, dt), Ve(t, pt, $), o = $, f = pt, L -= 1, p = [], v = [];
        } else
          l.delete(b), en(b, o, r), Ve(t, b.prev, b.next), Ve(t, b, f === null ? t.effect.first : f.next), Ve(t, f, b), f = b;
        continue;
      }
      for (p = [], v = []; o !== null && o !== b; )
        (l ?? (l = /* @__PURE__ */ new Set())).add(o), v.push(o), o = tn(o.next);
      if (o === null)
        continue;
    }
    (b.f & Ue) === 0 && p.push(b), f = b, o = tn(b.next);
  }
  if (t.outrogroups !== null) {
    for (const w of t.outrogroups)
      w.pending.size === 0 && (yi(t, Vn(w.done)), t.outrogroups?.delete(w));
    t.outrogroups.size === 0 && (t.outrogroups = null);
  }
  if (o !== null || l !== void 0) {
    var lt = [];
    if (l !== void 0)
      for (b of l)
        (b.f & jt) === 0 && lt.push(b);
    for (; o !== null; )
      (o.f & jt) === 0 && o !== t.fallback && lt.push(o), o = tn(o.next);
    var bt = lt.length;
    if (bt > 0) {
      var g = s === 0 ? r : null;
      Ga(t, lt, g);
    }
  }
}
function Ka(t, e, r, n, i, s, a, o) {
  var l = (a & Gs) !== 0 ? (a & Ks) === 0 ? /* @__PURE__ */ wa(r, !1, !1) : mr(r) : null, f = (a & qs) !== 0 ? mr(i) : null;
  return {
    v: l,
    i: f,
    e: ce(() => (s(e, l ?? r, f ?? i, o), () => {
      t.delete(n);
    }))
  };
}
function en(t, e, r) {
  if (t.nodes)
    for (var n = t.nodes.start, i = t.nodes.end, s = e && (e.f & Ue) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : r; n !== null; ) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ bn(n)
      );
      if (s.before(n), n === i)
        return;
      n = a;
    }
}
function Ve(t, e, r) {
  e === null ? t.effect.first = r : e.next = r, r === null ? t.effect.last = e : r.prev = e;
}
function Qa(t, e, r = !1, n = !1, i = !1, s = !1) {
  var a = t, o = "";
  if (r)
    var l = (
      /** @type {Element} */
      t
    );
  q(() => {
    var f = (
      /** @type {Effect} */
      W
    );
    if (o !== (o = e() ?? "")) {
      if (r) {
        f.nodes = null, l.innerHTML = /** @type {string} */
        o, o !== "" && fn(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(l),
          /** @type {TemplateNode} */
          l.lastChild
        );
        return;
      }
      if (f.nodes !== null && (Ho(
        f.nodes.start,
        /** @type {TemplateNode} */
        f.nodes.end
      ), f.nodes = null), o !== "") {
        var p = n ? Zs : i ? Xs : void 0, v = (
          /** @type {HTMLTemplateElement | SVGElement | MathMLElement} */
          Io(n ? "svg" : i ? "math" : "template", p)
        );
        v.innerHTML = /** @type {any} */
        o;
        var h = n || i ? v : (
          /** @type {HTMLTemplateElement} */
          v.content
        );
        if (fn(
          /** @type {TemplateNode} */
          /* @__PURE__ */ Ze(h),
          /** @type {TemplateNode} */
          h.lastChild
        ), n || i)
          for (; /* @__PURE__ */ Ze(h); )
            a.before(
              /** @type {TemplateNode} */
              /* @__PURE__ */ Ze(h)
            );
        else
          a.before(h);
      }
    }
  });
}
function ts(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number") n += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var i = t.length;
    for (e = 0; e < i; e++) t[e] && (r = ts(t[e])) && (n && (n += " "), n += r);
  } else for (r in t) t[r] && (n && (n += " "), n += r);
  return n;
}
function Wa() {
  for (var t, e, r = 0, n = "", i = arguments.length; r < i; r++) (t = arguments[r]) && (e = ts(t)) && (n && (n += " "), n += e);
  return n;
}
function ue(t) {
  return typeof t == "object" ? Wa(t) : t ?? "";
}
function Za(t, e, r) {
  var n = t == null ? "" : "" + t;
  return n === "" ? null : n;
}
function fe(t, e, r, n, i, s) {
  var a = t.__className;
  if (a !== r || a === void 0) {
    var o = Za(r);
    o == null ? t.removeAttribute("class") : t.className = o, t.__className = r;
  }
  return s;
}
function es(t, e, r = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!ki(e))
      return ta();
    for (var n of t.options)
      n.selected = e.includes(an(n));
    return;
  }
  for (n of t.options) {
    var i = an(n);
    if (Ea(i, e)) {
      n.selected = !0;
      return;
    }
  }
  (!r || e !== void 0) && (t.selectedIndex = -1);
}
function Xa(t) {
  var e = new MutationObserver(() => {
    es(t, t.__value);
  });
  e.observe(t, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Ni(() => {
    e.disconnect();
  });
}
function rs(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet(), i = !0;
  Po(t, "change", (s) => {
    var a = s ? "[selected]" : ":checked", o;
    if (t.multiple)
      o = [].map.call(t.querySelectorAll(a), an);
    else {
      var l = t.querySelector(a) ?? // will fall back to first non-disabled option if no option is selected
      t.querySelector("option:not([disabled])");
      o = l && an(l);
    }
    r(o), t.__value = o, V !== null && n.add(V);
  }), Fo(() => {
    var s = e();
    if (t === document.activeElement) {
      var a = (
        /** @type {Batch} */
        V
      );
      if (n.has(a))
        return;
    }
    if (es(t, s, i), i && s === void 0) {
      var o = t.querySelector(":checked");
      o !== null && (s = an(o), r(s));
    }
    t.__value = s, i = !1;
  }), Xa(t);
}
function an(t) {
  return "__value" in t ? t.__value : t.value;
}
const za = Symbol("is custom element"), tl = Symbol("is html");
function ns(t, e, r, n) {
  var i = el(t);
  i[e] !== (i[e] = r) && (e === "loading" && (t[Is] = r), r == null ? t.removeAttribute(e) : typeof r != "string" && rl(t).includes(e) ? t[e] = r : t.setAttribute(e, r));
}
function el(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [za]: t.nodeName.includes("-"),
      [tl]: t.namespaceURI === vo
    })
  );
}
var io = /* @__PURE__ */ new Map();
function rl(t) {
  var e = t.getAttribute("is") || t.nodeName, r = io.get(e);
  if (r) return r;
  io.set(e, r = []);
  for (var n, i = t, s = Element.prototype; s !== i; ) {
    n = Ms(i);
    for (var a in n)
      n[a].set && r.push(a);
    i = uo(i);
  }
  return r;
}
function mi(t, e, r = e) {
  var n = /* @__PURE__ */ new WeakSet();
  Po(t, "input", async (i) => {
    var s = i ? t.defaultValue : t.value;
    if (s = si(t) ? ai(s) : s, r(s), V !== null && n.add(V), await Ia(), s !== (s = e())) {
      var a = t.selectionStart, o = t.selectionEnd, l = t.value.length;
      if (t.value = s ?? "", o !== null) {
        var f = t.value.length;
        a === o && o === l && f > l ? (t.selectionStart = f, t.selectionEnd = f) : (t.selectionStart = a, t.selectionEnd = Math.min(o, f));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  ji(e) == null && t.value && (r(si(t) ? ai(t.value) : t.value), V !== null && n.add(V)), Bi(() => {
    var i = e();
    if (t === document.activeElement) {
      var s = (
        /** @type {Batch} */
        V
      );
      if (n.has(s))
        return;
    }
    si(t) && i === ai(t.value) || t.type === "date" && !i && !t.value || i !== t.value && (t.value = i ?? "");
  });
}
function si(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function ai(t) {
  return t === "" ? null : +t;
}
function oo(t, e) {
  return t === e || t?.[Rr] === e;
}
function nl(t = {}, e, r, n) {
  var i = (
    /** @type {ComponentContext} */
    zt.r
  ), s = (
    /** @type {Effect} */
    W
  );
  return Fo(() => {
    var a, o;
    return Bi(() => {
      a = o, o = [], ji(() => {
        t !== r(...o) && (e(t, ...o), a && oo(r(...a), t) && e(null, ...a));
      });
    }), () => {
      let l = s;
      for (; l !== i && l.parent !== null && l.parent.f & ui; )
        l = l.parent;
      const f = () => {
        o && oo(r(...o), t) && e(null, ...o);
      }, p = l.teardown;
      l.teardown = () => {
        f(), p?.();
      };
    };
  }), t;
}
const il = "5";
var lo;
typeof window < "u" && ((lo = window.__svelte ?? (window.__svelte = {})).v ?? (lo.v = /* @__PURE__ */ new Set())).add(il);
const qr = function(t, e) {
  let i = t;
  const s = rn[e];
  let a = null, o = 0, l = null;
  const f = [], p = {}, v = function(g, w) {
    o = i * 4 + 17, a = (function(d) {
      const k = new Array(d);
      for (let x = 0; x < d; x += 1) {
        k[x] = new Array(d);
        for (let M = 0; M < d; M += 1)
          k[x][M] = null;
      }
      return k;
    })(o), h(0, 0), h(o - 7, 0), h(0, o - 7), L(), b(), $(g, w), i >= 7 && B(g), l == null && (l = pt(i, s, f)), F(l, w);
  }, h = function(g, w) {
    for (let d = -1; d <= 7; d += 1)
      if (!(g + d <= -1 || o <= g + d))
        for (let k = -1; k <= 7; k += 1)
          w + k <= -1 || o <= w + k || (0 <= d && d <= 6 && (k == 0 || k == 6) || 0 <= k && k <= 6 && (d == 0 || d == 6) || 2 <= d && d <= 4 && 2 <= k && k <= 4 ? a[g + d][w + k] = !0 : a[g + d][w + k] = !1);
  }, m = function() {
    let g = 0, w = 0;
    for (let d = 0; d < 8; d += 1) {
      v(!0, d);
      const k = Ge.getLostPoint(p);
      (d == 0 || g > k) && (g = k, w = d);
    }
    return w;
  }, b = function() {
    for (let g = 8; g < o - 8; g += 1)
      a[g][6] == null && (a[g][6] = g % 2 == 0);
    for (let g = 8; g < o - 8; g += 1)
      a[6][g] == null && (a[6][g] = g % 2 == 0);
  }, L = function() {
    const g = Ge.getPatternPosition(i);
    for (let w = 0; w < g.length; w += 1)
      for (let d = 0; d < g.length; d += 1) {
        const k = g[w], x = g[d];
        if (a[k][x] == null)
          for (let M = -2; M <= 2; M += 1)
            for (let N = -2; N <= 2; N += 1)
              M == -2 || M == 2 || N == -2 || N == 2 || M == 0 && N == 0 ? a[k + M][x + N] = !0 : a[k + M][x + N] = !1;
      }
  }, B = function(g) {
    const w = Ge.getBCHTypeNumber(i);
    for (let d = 0; d < 18; d += 1) {
      const k = !g && (w >> d & 1) == 1;
      a[Math.floor(d / 3)][d % 3 + o - 8 - 3] = k;
    }
    for (let d = 0; d < 18; d += 1) {
      const k = !g && (w >> d & 1) == 1;
      a[d % 3 + o - 8 - 3][Math.floor(d / 3)] = k;
    }
  }, $ = function(g, w) {
    const d = s << 3 | w, k = Ge.getBCHTypeInfo(d);
    for (let x = 0; x < 15; x += 1) {
      const M = !g && (k >> x & 1) == 1;
      x < 6 ? a[x][8] = M : x < 8 ? a[x + 1][8] = M : a[o - 15 + x][8] = M;
    }
    for (let x = 0; x < 15; x += 1) {
      const M = !g && (k >> x & 1) == 1;
      x < 8 ? a[8][o - x - 1] = M : x < 9 ? a[8][15 - x - 1 + 1] = M : a[8][15 - x - 1] = M;
    }
    a[o - 8][8] = !g;
  }, F = function(g, w) {
    let d = -1, k = o - 1, x = 7, M = 0;
    const N = Ge.getMaskFunction(w);
    for (let Z = o - 1; Z > 0; Z -= 2)
      for (Z == 6 && (Z -= 1); ; ) {
        for (let z = 0; z < 2; z += 1)
          if (a[k][Z - z] == null) {
            let ut = !1;
            M < g.length && (ut = (g[M] >>> x & 1) == 1), N(k, Z - z) && (ut = !ut), a[k][Z - z] = ut, x -= 1, x == -1 && (M += 1, x = 7);
          }
        if (k += d, k < 0 || o <= k) {
          k -= d, d = -d;
          break;
        }
      }
  }, dt = function(g, w) {
    let d = 0, k = 0, x = 0;
    const M = new Array(w.length), N = new Array(w.length);
    for (let P = 0; P < w.length; P += 1) {
      const it = w[P].dataCount, yt = w[P].totalCount - it;
      k = Math.max(k, it), x = Math.max(x, yt), M[P] = new Array(it);
      for (let Nt = 0; Nt < M[P].length; Nt += 1)
        M[P][Nt] = 255 & g.getBuffer()[Nt + d];
      d += it;
      const kt = Ge.getErrorCorrectPolynomial(yt), kr = cn(M[P], kt.getLength() - 1).mod(kt);
      N[P] = new Array(kt.getLength() - 1);
      for (let Nt = 0; Nt < N[P].length; Nt += 1) {
        const Ne = Nt + kr.getLength() - N[P].length;
        N[P][Nt] = Ne >= 0 ? kr.getAt(Ne) : 0;
      }
    }
    let Z = 0;
    for (let P = 0; P < w.length; P += 1)
      Z += w[P].totalCount;
    const z = new Array(Z);
    let ut = 0;
    for (let P = 0; P < k; P += 1)
      for (let it = 0; it < w.length; it += 1)
        P < M[it].length && (z[ut] = M[it][P], ut += 1);
    for (let P = 0; P < x; P += 1)
      for (let it = 0; it < w.length; it += 1)
        P < N[it].length && (z[ut] = N[it][P], ut += 1);
    return z;
  }, pt = function(g, w, d) {
    const k = so.getRSBlocks(g, w), x = ao();
    for (let N = 0; N < d.length; N += 1) {
      const Z = d[N];
      x.put(Z.getMode(), 4), x.put(Z.getLength(), Ge.getLengthInBits(Z.getMode(), g)), Z.write(x);
    }
    let M = 0;
    for (let N = 0; N < k.length; N += 1)
      M += k[N].dataCount;
    if (x.getLengthInBits() > M * 8)
      throw "code length overflow. (" + x.getLengthInBits() + ">" + M * 8 + ")";
    for (x.getLengthInBits() + 4 <= M * 8 && x.put(0, 4); x.getLengthInBits() % 8 != 0; )
      x.putBit(!1);
    for (; !(x.getLengthInBits() >= M * 8 || (x.put(236, 8), x.getLengthInBits() >= M * 8)); )
      x.put(17, 8);
    return dt(x, k);
  };
  p.addData = function(g, w) {
    w = w || "Byte";
    let d = null;
    switch (w) {
      case "Numeric":
        d = ol(g);
        break;
      case "Alphanumeric":
        d = sl(g);
        break;
      case "Byte":
        d = al(g);
        break;
      case "Kanji":
        d = ll(g);
        break;
      default:
        throw "mode:" + w;
    }
    f.push(d), l = null;
  }, p.isDark = function(g, w) {
    if (g < 0 || o <= g || w < 0 || o <= w)
      throw g + "," + w;
    return a[g][w];
  }, p.getModuleCount = function() {
    return o;
  }, p.make = function() {
    if (i < 1) {
      let g = 1;
      for (; g < 40; g++) {
        const w = so.getRSBlocks(g, s), d = ao();
        for (let x = 0; x < f.length; x++) {
          const M = f[x];
          d.put(M.getMode(), 4), d.put(M.getLength(), Ge.getLengthInBits(M.getMode(), g)), M.write(d);
        }
        let k = 0;
        for (let x = 0; x < w.length; x++)
          k += w[x].dataCount;
        if (d.getLengthInBits() <= k * 8)
          break;
      }
      i = g;
    }
    v(!1, m());
  }, p.createTableTag = function(g, w) {
    g = g || 2, w = typeof w > "u" ? g * 4 : w;
    let d = "";
    d += '<table style="', d += " border-width: 0px; border-style: none;", d += " border-collapse: collapse;", d += " padding: 0px; margin: " + w + "px;", d += '">', d += "<tbody>";
    for (let k = 0; k < p.getModuleCount(); k += 1) {
      d += "<tr>";
      for (let x = 0; x < p.getModuleCount(); x += 1)
        d += '<td style="', d += " border-width: 0px; border-style: none;", d += " border-collapse: collapse;", d += " padding: 0px; margin: 0px;", d += " width: " + g + "px;", d += " height: " + g + "px;", d += " background-color: ", d += p.isDark(k, x) ? "#000000" : "#ffffff", d += ";", d += '"/>';
      d += "</tr>";
    }
    return d += "</tbody>", d += "</table>", d;
  }, p.createSvgTag = function(g, w, d, k) {
    let x = {};
    typeof arguments[0] == "object" && (x = arguments[0], g = x.cellSize, w = x.margin, d = x.alt, k = x.title), g = g || 2, w = typeof w > "u" ? g * 4 : w, d = typeof d == "string" ? { text: d } : d || {}, d.text = d.text || null, d.id = d.text ? d.id || "qrcode-description" : null, k = typeof k == "string" ? { text: k } : k || {}, k.text = k.text || null, k.id = k.text ? k.id || "qrcode-title" : null;
    const M = p.getModuleCount() * g + w * 2;
    let N, Z, z, ut, P = "", it;
    for (it = "l" + g + ",0 0," + g + " -" + g + ",0 0,-" + g + "z ", P += '<svg version="1.1" xmlns="http://www.w3.org/2000/svg"', P += x.scalable ? "" : ' width="' + M + 'px" height="' + M + 'px"', P += ' viewBox="0 0 ' + M + " " + M + '" ', P += ' preserveAspectRatio="xMinYMin meet"', P += k.text || d.text ? ' role="img" aria-labelledby="' + lt([k.id, d.id].join(" ").trim()) + '"' : "", P += ">", P += k.text ? '<title id="' + lt(k.id) + '">' + lt(k.text) + "</title>" : "", P += d.text ? '<description id="' + lt(d.id) + '">' + lt(d.text) + "</description>" : "", P += '<rect width="100%" height="100%" fill="white" cx="0" cy="0"/>', P += '<path d="', z = 0; z < p.getModuleCount(); z += 1)
      for (ut = z * g + w, N = 0; N < p.getModuleCount(); N += 1)
        p.isDark(z, N) && (Z = N * g + w, P += "M" + Z + "," + ut + it);
    return P += '" stroke="transparent" fill="black"/>', P += "</svg>", P;
  }, p.createDataURL = function(g, w) {
    g = g || 2, w = typeof w > "u" ? g * 4 : w;
    const d = p.getModuleCount() * g + w * 2, k = w, x = d - w;
    return dl(d, d, function(M, N) {
      if (k <= M && M < x && k <= N && N < x) {
        const Z = Math.floor((M - k) / g), z = Math.floor((N - k) / g);
        return p.isDark(z, Z) ? 0 : 1;
      } else
        return 1;
    });
  }, p.createImgTag = function(g, w, d) {
    g = g || 2, w = typeof w > "u" ? g * 4 : w;
    const k = p.getModuleCount() * g + w * 2;
    let x = "";
    return x += "<img", x += ' src="', x += p.createDataURL(g, w), x += '"', x += ' width="', x += k, x += '"', x += ' height="', x += k, x += '"', d && (x += ' alt="', x += lt(d), x += '"'), x += "/>", x;
  };
  const lt = function(g) {
    let w = "";
    for (let d = 0; d < g.length; d += 1) {
      const k = g.charAt(d);
      switch (k) {
        case "<":
          w += "&lt;";
          break;
        case ">":
          w += "&gt;";
          break;
        case "&":
          w += "&amp;";
          break;
        case '"':
          w += "&quot;";
          break;
        default:
          w += k;
          break;
      }
    }
    return w;
  }, bt = function(g) {
    g = typeof g > "u" ? 2 : g;
    const d = p.getModuleCount() * 1 + g * 2, k = g, x = d - g;
    let M, N, Z, z, ut;
    const P = {
      "██": "█",
      "█ ": "▀",
      " █": "▄",
      "  ": " "
    }, it = {
      "██": "▀",
      "█ ": "▀",
      " █": " ",
      "  ": " "
    };
    let yt = "";
    for (M = 0; M < d; M += 2) {
      for (Z = Math.floor((M - k) / 1), z = Math.floor((M + 1 - k) / 1), N = 0; N < d; N += 1)
        ut = "█", k <= N && N < x && k <= M && M < x && p.isDark(Z, Math.floor((N - k) / 1)) && (ut = " "), k <= N && N < x && k <= M + 1 && M + 1 < x && p.isDark(z, Math.floor((N - k) / 1)) ? ut += " " : ut += "█", yt += g < 1 && M + 1 >= x ? it[ut] : P[ut];
      yt += `
`;
    }
    return d % 2 && g > 0 ? yt.substring(0, yt.length - d - 1) + Array(d + 1).join("▀") : yt.substring(0, yt.length - 1);
  };
  return p.createASCII = function(g, w) {
    if (g = g || 1, g < 2)
      return bt(w);
    g -= 1, w = typeof w > "u" ? g * 2 : w;
    const d = p.getModuleCount() * g + w * 2, k = w, x = d - w;
    let M, N, Z, z;
    const ut = Array(g + 1).join("██"), P = Array(g + 1).join("  ");
    let it = "", yt = "";
    for (M = 0; M < d; M += 1) {
      for (Z = Math.floor((M - k) / g), yt = "", N = 0; N < d; N += 1)
        z = 1, k <= N && N < x && k <= M && M < x && p.isDark(Z, Math.floor((N - k) / g)) && (z = 0), yt += z ? ut : P;
      for (Z = 0; Z < g; Z += 1)
        it += yt + `
`;
    }
    return it.substring(0, it.length - 1);
  }, p.renderTo2dContext = function(g, w) {
    w = w || 2;
    const d = p.getModuleCount();
    for (let k = 0; k < d; k++)
      for (let x = 0; x < d; x++)
        g.fillStyle = p.isDark(k, x) ? "black" : "white", g.fillRect(x * w, k * w, w, w);
  }, p;
};
qr.stringToBytes = function(t) {
  const e = [];
  for (let r = 0; r < t.length; r += 1) {
    const n = t.charCodeAt(r);
    e.push(n & 255);
  }
  return e;
};
qr.createStringToBytes = function(t, e) {
  const r = (function() {
    const i = fl(t), s = function() {
      const l = i.read();
      if (l == -1) throw "eof";
      return l;
    };
    let a = 0;
    const o = {};
    for (; ; ) {
      const l = i.read();
      if (l == -1) break;
      const f = s(), p = s(), v = s(), h = String.fromCharCode(l << 8 | f), m = p << 8 | v;
      o[h] = m, a += 1;
    }
    if (a != e)
      throw a + " != " + e;
    return o;
  })(), n = 63;
  return function(i) {
    const s = [];
    for (let a = 0; a < i.length; a += 1) {
      const o = i.charCodeAt(a);
      if (o < 128)
        s.push(o);
      else {
        const l = r[i.charAt(a)];
        typeof l == "number" ? (l & 255) == l ? s.push(l) : (s.push(l >>> 8), s.push(l & 255)) : s.push(n);
      }
    }
    return s;
  };
};
const Rt = {
  MODE_NUMBER: 1,
  MODE_ALPHA_NUM: 2,
  MODE_8BIT_BYTE: 4,
  MODE_KANJI: 8
}, rn = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2
}, Ye = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7
}, Ge = (function() {
  const t = [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170]
  ], e = 1335, r = 7973, n = 21522, i = {}, s = function(a) {
    let o = 0;
    for (; a != 0; )
      o += 1, a >>>= 1;
    return o;
  };
  return i.getBCHTypeInfo = function(a) {
    let o = a << 10;
    for (; s(o) - s(e) >= 0; )
      o ^= e << s(o) - s(e);
    return (a << 10 | o) ^ n;
  }, i.getBCHTypeNumber = function(a) {
    let o = a << 12;
    for (; s(o) - s(r) >= 0; )
      o ^= r << s(o) - s(r);
    return a << 12 | o;
  }, i.getPatternPosition = function(a) {
    return t[a - 1];
  }, i.getMaskFunction = function(a) {
    switch (a) {
      case Ye.PATTERN000:
        return function(o, l) {
          return (o + l) % 2 == 0;
        };
      case Ye.PATTERN001:
        return function(o, l) {
          return o % 2 == 0;
        };
      case Ye.PATTERN010:
        return function(o, l) {
          return l % 3 == 0;
        };
      case Ye.PATTERN011:
        return function(o, l) {
          return (o + l) % 3 == 0;
        };
      case Ye.PATTERN100:
        return function(o, l) {
          return (Math.floor(o / 2) + Math.floor(l / 3)) % 2 == 0;
        };
      case Ye.PATTERN101:
        return function(o, l) {
          return o * l % 2 + o * l % 3 == 0;
        };
      case Ye.PATTERN110:
        return function(o, l) {
          return (o * l % 2 + o * l % 3) % 2 == 0;
        };
      case Ye.PATTERN111:
        return function(o, l) {
          return (o * l % 3 + (o + l) % 2) % 2 == 0;
        };
      default:
        throw "bad maskPattern:" + a;
    }
  }, i.getErrorCorrectPolynomial = function(a) {
    let o = cn([1], 0);
    for (let l = 0; l < a; l += 1)
      o = o.multiply(cn([1, qe.gexp(l)], 0));
    return o;
  }, i.getLengthInBits = function(a, o) {
    if (1 <= o && o < 10)
      switch (a) {
        case Rt.MODE_NUMBER:
          return 10;
        case Rt.MODE_ALPHA_NUM:
          return 9;
        case Rt.MODE_8BIT_BYTE:
          return 8;
        case Rt.MODE_KANJI:
          return 8;
        default:
          throw "mode:" + a;
      }
    else if (o < 27)
      switch (a) {
        case Rt.MODE_NUMBER:
          return 12;
        case Rt.MODE_ALPHA_NUM:
          return 11;
        case Rt.MODE_8BIT_BYTE:
          return 16;
        case Rt.MODE_KANJI:
          return 10;
        default:
          throw "mode:" + a;
      }
    else if (o < 41)
      switch (a) {
        case Rt.MODE_NUMBER:
          return 14;
        case Rt.MODE_ALPHA_NUM:
          return 13;
        case Rt.MODE_8BIT_BYTE:
          return 16;
        case Rt.MODE_KANJI:
          return 12;
        default:
          throw "mode:" + a;
      }
    else
      throw "type:" + o;
  }, i.getLostPoint = function(a) {
    const o = a.getModuleCount();
    let l = 0;
    for (let v = 0; v < o; v += 1)
      for (let h = 0; h < o; h += 1) {
        let m = 0;
        const b = a.isDark(v, h);
        for (let L = -1; L <= 1; L += 1)
          if (!(v + L < 0 || o <= v + L))
            for (let B = -1; B <= 1; B += 1)
              h + B < 0 || o <= h + B || L == 0 && B == 0 || b == a.isDark(v + L, h + B) && (m += 1);
        m > 5 && (l += 3 + m - 5);
      }
    for (let v = 0; v < o - 1; v += 1)
      for (let h = 0; h < o - 1; h += 1) {
        let m = 0;
        a.isDark(v, h) && (m += 1), a.isDark(v + 1, h) && (m += 1), a.isDark(v, h + 1) && (m += 1), a.isDark(v + 1, h + 1) && (m += 1), (m == 0 || m == 4) && (l += 3);
      }
    for (let v = 0; v < o; v += 1)
      for (let h = 0; h < o - 6; h += 1)
        a.isDark(v, h) && !a.isDark(v, h + 1) && a.isDark(v, h + 2) && a.isDark(v, h + 3) && a.isDark(v, h + 4) && !a.isDark(v, h + 5) && a.isDark(v, h + 6) && (l += 40);
    for (let v = 0; v < o; v += 1)
      for (let h = 0; h < o - 6; h += 1)
        a.isDark(h, v) && !a.isDark(h + 1, v) && a.isDark(h + 2, v) && a.isDark(h + 3, v) && a.isDark(h + 4, v) && !a.isDark(h + 5, v) && a.isDark(h + 6, v) && (l += 40);
    let f = 0;
    for (let v = 0; v < o; v += 1)
      for (let h = 0; h < o; h += 1)
        a.isDark(h, v) && (f += 1);
    const p = Math.abs(100 * f / o / o - 50) / 5;
    return l += p * 10, l;
  }, i;
})(), qe = (function() {
  const t = new Array(256), e = new Array(256);
  for (let n = 0; n < 8; n += 1)
    t[n] = 1 << n;
  for (let n = 8; n < 256; n += 1)
    t[n] = t[n - 4] ^ t[n - 5] ^ t[n - 6] ^ t[n - 8];
  for (let n = 0; n < 255; n += 1)
    e[t[n]] = n;
  const r = {};
  return r.glog = function(n) {
    if (n < 1)
      throw "glog(" + n + ")";
    return e[n];
  }, r.gexp = function(n) {
    for (; n < 0; )
      n += 255;
    for (; n >= 256; )
      n -= 255;
    return t[n];
  }, r;
})(), cn = function(t, e) {
  if (typeof t.length > "u")
    throw t.length + "/" + e;
  const r = (function() {
    let i = 0;
    for (; i < t.length && t[i] == 0; )
      i += 1;
    const s = new Array(t.length - i + e);
    for (let a = 0; a < t.length - i; a += 1)
      s[a] = t[a + i];
    return s;
  })(), n = {};
  return n.getAt = function(i) {
    return r[i];
  }, n.getLength = function() {
    return r.length;
  }, n.multiply = function(i) {
    const s = new Array(n.getLength() + i.getLength() - 1);
    for (let a = 0; a < n.getLength(); a += 1)
      for (let o = 0; o < i.getLength(); o += 1)
        s[a + o] ^= qe.gexp(qe.glog(n.getAt(a)) + qe.glog(i.getAt(o)));
    return cn(s, 0);
  }, n.mod = function(i) {
    if (n.getLength() - i.getLength() < 0)
      return n;
    const s = qe.glog(n.getAt(0)) - qe.glog(i.getAt(0)), a = new Array(n.getLength());
    for (let o = 0; o < n.getLength(); o += 1)
      a[o] = n.getAt(o);
    for (let o = 0; o < i.getLength(); o += 1)
      a[o] ^= qe.gexp(qe.glog(i.getAt(o)) + s);
    return cn(a, 0).mod(i);
  }, n;
}, so = (function() {
  const t = [
    // L
    // M
    // Q
    // H
    // 1
    [1, 26, 19],
    [1, 26, 16],
    [1, 26, 13],
    [1, 26, 9],
    // 2
    [1, 44, 34],
    [1, 44, 28],
    [1, 44, 22],
    [1, 44, 16],
    // 3
    [1, 70, 55],
    [1, 70, 44],
    [2, 35, 17],
    [2, 35, 13],
    // 4
    [1, 100, 80],
    [2, 50, 32],
    [2, 50, 24],
    [4, 25, 9],
    // 5
    [1, 134, 108],
    [2, 67, 43],
    [2, 33, 15, 2, 34, 16],
    [2, 33, 11, 2, 34, 12],
    // 6
    [2, 86, 68],
    [4, 43, 27],
    [4, 43, 19],
    [4, 43, 15],
    // 7
    [2, 98, 78],
    [4, 49, 31],
    [2, 32, 14, 4, 33, 15],
    [4, 39, 13, 1, 40, 14],
    // 8
    [2, 121, 97],
    [2, 60, 38, 2, 61, 39],
    [4, 40, 18, 2, 41, 19],
    [4, 40, 14, 2, 41, 15],
    // 9
    [2, 146, 116],
    [3, 58, 36, 2, 59, 37],
    [4, 36, 16, 4, 37, 17],
    [4, 36, 12, 4, 37, 13],
    // 10
    [2, 86, 68, 2, 87, 69],
    [4, 69, 43, 1, 70, 44],
    [6, 43, 19, 2, 44, 20],
    [6, 43, 15, 2, 44, 16],
    // 11
    [4, 101, 81],
    [1, 80, 50, 4, 81, 51],
    [4, 50, 22, 4, 51, 23],
    [3, 36, 12, 8, 37, 13],
    // 12
    [2, 116, 92, 2, 117, 93],
    [6, 58, 36, 2, 59, 37],
    [4, 46, 20, 6, 47, 21],
    [7, 42, 14, 4, 43, 15],
    // 13
    [4, 133, 107],
    [8, 59, 37, 1, 60, 38],
    [8, 44, 20, 4, 45, 21],
    [12, 33, 11, 4, 34, 12],
    // 14
    [3, 145, 115, 1, 146, 116],
    [4, 64, 40, 5, 65, 41],
    [11, 36, 16, 5, 37, 17],
    [11, 36, 12, 5, 37, 13],
    // 15
    [5, 109, 87, 1, 110, 88],
    [5, 65, 41, 5, 66, 42],
    [5, 54, 24, 7, 55, 25],
    [11, 36, 12, 7, 37, 13],
    // 16
    [5, 122, 98, 1, 123, 99],
    [7, 73, 45, 3, 74, 46],
    [15, 43, 19, 2, 44, 20],
    [3, 45, 15, 13, 46, 16],
    // 17
    [1, 135, 107, 5, 136, 108],
    [10, 74, 46, 1, 75, 47],
    [1, 50, 22, 15, 51, 23],
    [2, 42, 14, 17, 43, 15],
    // 18
    [5, 150, 120, 1, 151, 121],
    [9, 69, 43, 4, 70, 44],
    [17, 50, 22, 1, 51, 23],
    [2, 42, 14, 19, 43, 15],
    // 19
    [3, 141, 113, 4, 142, 114],
    [3, 70, 44, 11, 71, 45],
    [17, 47, 21, 4, 48, 22],
    [9, 39, 13, 16, 40, 14],
    // 20
    [3, 135, 107, 5, 136, 108],
    [3, 67, 41, 13, 68, 42],
    [15, 54, 24, 5, 55, 25],
    [15, 43, 15, 10, 44, 16],
    // 21
    [4, 144, 116, 4, 145, 117],
    [17, 68, 42],
    [17, 50, 22, 6, 51, 23],
    [19, 46, 16, 6, 47, 17],
    // 22
    [2, 139, 111, 7, 140, 112],
    [17, 74, 46],
    [7, 54, 24, 16, 55, 25],
    [34, 37, 13],
    // 23
    [4, 151, 121, 5, 152, 122],
    [4, 75, 47, 14, 76, 48],
    [11, 54, 24, 14, 55, 25],
    [16, 45, 15, 14, 46, 16],
    // 24
    [6, 147, 117, 4, 148, 118],
    [6, 73, 45, 14, 74, 46],
    [11, 54, 24, 16, 55, 25],
    [30, 46, 16, 2, 47, 17],
    // 25
    [8, 132, 106, 4, 133, 107],
    [8, 75, 47, 13, 76, 48],
    [7, 54, 24, 22, 55, 25],
    [22, 45, 15, 13, 46, 16],
    // 26
    [10, 142, 114, 2, 143, 115],
    [19, 74, 46, 4, 75, 47],
    [28, 50, 22, 6, 51, 23],
    [33, 46, 16, 4, 47, 17],
    // 27
    [8, 152, 122, 4, 153, 123],
    [22, 73, 45, 3, 74, 46],
    [8, 53, 23, 26, 54, 24],
    [12, 45, 15, 28, 46, 16],
    // 28
    [3, 147, 117, 10, 148, 118],
    [3, 73, 45, 23, 74, 46],
    [4, 54, 24, 31, 55, 25],
    [11, 45, 15, 31, 46, 16],
    // 29
    [7, 146, 116, 7, 147, 117],
    [21, 73, 45, 7, 74, 46],
    [1, 53, 23, 37, 54, 24],
    [19, 45, 15, 26, 46, 16],
    // 30
    [5, 145, 115, 10, 146, 116],
    [19, 75, 47, 10, 76, 48],
    [15, 54, 24, 25, 55, 25],
    [23, 45, 15, 25, 46, 16],
    // 31
    [13, 145, 115, 3, 146, 116],
    [2, 74, 46, 29, 75, 47],
    [42, 54, 24, 1, 55, 25],
    [23, 45, 15, 28, 46, 16],
    // 32
    [17, 145, 115],
    [10, 74, 46, 23, 75, 47],
    [10, 54, 24, 35, 55, 25],
    [19, 45, 15, 35, 46, 16],
    // 33
    [17, 145, 115, 1, 146, 116],
    [14, 74, 46, 21, 75, 47],
    [29, 54, 24, 19, 55, 25],
    [11, 45, 15, 46, 46, 16],
    // 34
    [13, 145, 115, 6, 146, 116],
    [14, 74, 46, 23, 75, 47],
    [44, 54, 24, 7, 55, 25],
    [59, 46, 16, 1, 47, 17],
    // 35
    [12, 151, 121, 7, 152, 122],
    [12, 75, 47, 26, 76, 48],
    [39, 54, 24, 14, 55, 25],
    [22, 45, 15, 41, 46, 16],
    // 36
    [6, 151, 121, 14, 152, 122],
    [6, 75, 47, 34, 76, 48],
    [46, 54, 24, 10, 55, 25],
    [2, 45, 15, 64, 46, 16],
    // 37
    [17, 152, 122, 4, 153, 123],
    [29, 74, 46, 14, 75, 47],
    [49, 54, 24, 10, 55, 25],
    [24, 45, 15, 46, 46, 16],
    // 38
    [4, 152, 122, 18, 153, 123],
    [13, 74, 46, 32, 75, 47],
    [48, 54, 24, 14, 55, 25],
    [42, 45, 15, 32, 46, 16],
    // 39
    [20, 147, 117, 4, 148, 118],
    [40, 75, 47, 7, 76, 48],
    [43, 54, 24, 22, 55, 25],
    [10, 45, 15, 67, 46, 16],
    // 40
    [19, 148, 118, 6, 149, 119],
    [18, 75, 47, 31, 76, 48],
    [34, 54, 24, 34, 55, 25],
    [20, 45, 15, 61, 46, 16]
  ], e = function(i, s) {
    const a = {};
    return a.totalCount = i, a.dataCount = s, a;
  }, r = {}, n = function(i, s) {
    switch (s) {
      case rn.L:
        return t[(i - 1) * 4 + 0];
      case rn.M:
        return t[(i - 1) * 4 + 1];
      case rn.Q:
        return t[(i - 1) * 4 + 2];
      case rn.H:
        return t[(i - 1) * 4 + 3];
      default:
        return;
    }
  };
  return r.getRSBlocks = function(i, s) {
    const a = n(i, s);
    if (typeof a > "u")
      throw "bad rs block @ typeNumber:" + i + "/errorCorrectionLevel:" + s;
    const o = a.length / 3, l = [];
    for (let f = 0; f < o; f += 1) {
      const p = a[f * 3 + 0], v = a[f * 3 + 1], h = a[f * 3 + 2];
      for (let m = 0; m < p; m += 1)
        l.push(e(v, h));
    }
    return l;
  }, r;
})(), ao = function() {
  const t = [];
  let e = 0;
  const r = {};
  return r.getBuffer = function() {
    return t;
  }, r.getAt = function(n) {
    const i = Math.floor(n / 8);
    return (t[i] >>> 7 - n % 8 & 1) == 1;
  }, r.put = function(n, i) {
    for (let s = 0; s < i; s += 1)
      r.putBit((n >>> i - s - 1 & 1) == 1);
  }, r.getLengthInBits = function() {
    return e;
  }, r.putBit = function(n) {
    const i = Math.floor(e / 8);
    t.length <= i && t.push(0), n && (t[i] |= 128 >>> e % 8), e += 1;
  }, r;
}, ol = function(t) {
  const e = Rt.MODE_NUMBER, r = t, n = {};
  n.getMode = function() {
    return e;
  }, n.getLength = function(a) {
    return r.length;
  }, n.write = function(a) {
    const o = r;
    let l = 0;
    for (; l + 2 < o.length; )
      a.put(i(o.substring(l, l + 3)), 10), l += 3;
    l < o.length && (o.length - l == 1 ? a.put(i(o.substring(l, l + 1)), 4) : o.length - l == 2 && a.put(i(o.substring(l, l + 2)), 7));
  };
  const i = function(a) {
    let o = 0;
    for (let l = 0; l < a.length; l += 1)
      o = o * 10 + s(a.charAt(l));
    return o;
  }, s = function(a) {
    if ("0" <= a && a <= "9")
      return a.charCodeAt(0) - 48;
    throw "illegal char :" + a;
  };
  return n;
}, sl = function(t) {
  const e = Rt.MODE_ALPHA_NUM, r = t, n = {};
  n.getMode = function() {
    return e;
  }, n.getLength = function(s) {
    return r.length;
  }, n.write = function(s) {
    const a = r;
    let o = 0;
    for (; o + 1 < a.length; )
      s.put(
        i(a.charAt(o)) * 45 + i(a.charAt(o + 1)),
        11
      ), o += 2;
    o < a.length && s.put(i(a.charAt(o)), 6);
  };
  const i = function(s) {
    if ("0" <= s && s <= "9")
      return s.charCodeAt(0) - 48;
    if ("A" <= s && s <= "Z")
      return s.charCodeAt(0) - 65 + 10;
    switch (s) {
      case " ":
        return 36;
      case "$":
        return 37;
      case "%":
        return 38;
      case "*":
        return 39;
      case "+":
        return 40;
      case "-":
        return 41;
      case ".":
        return 42;
      case "/":
        return 43;
      case ":":
        return 44;
      default:
        throw "illegal char :" + s;
    }
  };
  return n;
}, al = function(t) {
  const e = Rt.MODE_8BIT_BYTE, r = qr.stringToBytes(t), n = {};
  return n.getMode = function() {
    return e;
  }, n.getLength = function(i) {
    return r.length;
  }, n.write = function(i) {
    for (let s = 0; s < r.length; s += 1)
      i.put(r[s], 8);
  }, n;
}, ll = function(t) {
  const e = Rt.MODE_KANJI, r = qr.stringToBytes;
  (function(s, a) {
    const o = r(s);
    if (o.length != 2 || (o[0] << 8 | o[1]) != a)
      throw "sjis not supported.";
  })("友", 38726);
  const n = r(t), i = {};
  return i.getMode = function() {
    return e;
  }, i.getLength = function(s) {
    return ~~(n.length / 2);
  }, i.write = function(s) {
    const a = n;
    let o = 0;
    for (; o + 1 < a.length; ) {
      let l = (255 & a[o]) << 8 | 255 & a[o + 1];
      if (33088 <= l && l <= 40956)
        l -= 33088;
      else if (57408 <= l && l <= 60351)
        l -= 49472;
      else
        throw "illegal char at " + (o + 1) + "/" + l;
      l = (l >>> 8 & 255) * 192 + (l & 255), s.put(l, 13), o += 2;
    }
    if (o < a.length)
      throw "illegal char at " + (o + 1);
  }, i;
}, is = function() {
  const t = [], e = {};
  return e.writeByte = function(r) {
    t.push(r & 255);
  }, e.writeShort = function(r) {
    e.writeByte(r), e.writeByte(r >>> 8);
  }, e.writeBytes = function(r, n, i) {
    n = n || 0, i = i || r.length;
    for (let s = 0; s < i; s += 1)
      e.writeByte(r[s + n]);
  }, e.writeString = function(r) {
    for (let n = 0; n < r.length; n += 1)
      e.writeByte(r.charCodeAt(n));
  }, e.toByteArray = function() {
    return t;
  }, e.toString = function() {
    let r = "";
    r += "[";
    for (let n = 0; n < t.length; n += 1)
      n > 0 && (r += ","), r += t[n];
    return r += "]", r;
  }, e;
}, ul = function() {
  let t = 0, e = 0, r = 0, n = "";
  const i = {}, s = function(o) {
    n += String.fromCharCode(a(o & 63));
  }, a = function(o) {
    if (o < 0)
      throw "n:" + o;
    if (o < 26)
      return 65 + o;
    if (o < 52)
      return 97 + (o - 26);
    if (o < 62)
      return 48 + (o - 52);
    if (o == 62)
      return 43;
    if (o == 63)
      return 47;
    throw "n:" + o;
  };
  return i.writeByte = function(o) {
    for (t = t << 8 | o & 255, e += 8, r += 1; e >= 6; )
      s(t >>> e - 6), e -= 6;
  }, i.flush = function() {
    if (e > 0 && (s(t << 6 - e), t = 0, e = 0), r % 3 != 0) {
      const o = 3 - r % 3;
      for (let l = 0; l < o; l += 1)
        n += "=";
    }
  }, i.toString = function() {
    return n;
  }, i;
}, fl = function(t) {
  const e = t;
  let r = 0, n = 0, i = 0;
  const s = {};
  s.read = function() {
    for (; i < 8; ) {
      if (r >= e.length) {
        if (i == 0)
          return -1;
        throw "unexpected end of file./" + i;
      }
      const l = e.charAt(r);
      if (r += 1, l == "=")
        return i = 0, -1;
      if (l.match(/^\s$/))
        continue;
      n = n << 6 | a(l.charCodeAt(0)), i += 6;
    }
    const o = n >>> i - 8 & 255;
    return i -= 8, o;
  };
  const a = function(o) {
    if (65 <= o && o <= 90)
      return o - 65;
    if (97 <= o && o <= 122)
      return o - 97 + 26;
    if (48 <= o && o <= 57)
      return o - 48 + 52;
    if (o == 43)
      return 62;
    if (o == 47)
      return 63;
    throw "c:" + o;
  };
  return s;
}, cl = function(t, e) {
  const r = t, n = e, i = new Array(t * e), s = {};
  s.setPixel = function(f, p, v) {
    i[p * r + f] = v;
  }, s.write = function(f) {
    f.writeString("GIF87a"), f.writeShort(r), f.writeShort(n), f.writeByte(128), f.writeByte(0), f.writeByte(0), f.writeByte(0), f.writeByte(0), f.writeByte(0), f.writeByte(255), f.writeByte(255), f.writeByte(255), f.writeString(","), f.writeShort(0), f.writeShort(0), f.writeShort(r), f.writeShort(n), f.writeByte(0);
    const p = 2, v = o(p);
    f.writeByte(p);
    let h = 0;
    for (; v.length - h > 255; )
      f.writeByte(255), f.writeBytes(v, h, 255), h += 255;
    f.writeByte(v.length - h), f.writeBytes(v, h, v.length - h), f.writeByte(0), f.writeString(";");
  };
  const a = function(f) {
    const p = f;
    let v = 0, h = 0;
    const m = {};
    return m.write = function(b, L) {
      if (b >>> L)
        throw "length over";
      for (; v + L >= 8; )
        p.writeByte(255 & (b << v | h)), L -= 8 - v, b >>>= 8 - v, h = 0, v = 0;
      h = b << v | h, v = v + L;
    }, m.flush = function() {
      v > 0 && p.writeByte(h);
    }, m;
  }, o = function(f) {
    const p = 1 << f, v = (1 << f) + 1;
    let h = f + 1;
    const m = l();
    for (let F = 0; F < p; F += 1)
      m.add(String.fromCharCode(F));
    m.add(String.fromCharCode(p)), m.add(String.fromCharCode(v));
    const b = is(), L = a(b);
    L.write(p, h);
    let B = 0, $ = String.fromCharCode(i[B]);
    for (B += 1; B < i.length; ) {
      const F = String.fromCharCode(i[B]);
      B += 1, m.contains($ + F) ? $ = $ + F : (L.write(m.indexOf($), h), m.size() < 4095 && (m.size() == 1 << h && (h += 1), m.add($ + F)), $ = F);
    }
    return L.write(m.indexOf($), h), L.write(v, h), L.flush(), b.toByteArray();
  }, l = function() {
    const f = {};
    let p = 0;
    const v = {};
    return v.add = function(h) {
      if (v.contains(h))
        throw "dup key:" + h;
      f[h] = p, p += 1;
    }, v.size = function() {
      return p;
    }, v.indexOf = function(h) {
      return f[h];
    }, v.contains = function(h) {
      return typeof f[h] < "u";
    }, v;
  };
  return s;
}, dl = function(t, e, r) {
  const n = cl(t, e);
  for (let o = 0; o < e; o += 1)
    for (let l = 0; l < t; l += 1)
      n.setPixel(l, o, r(l, o));
  const i = is();
  n.write(i);
  const s = ul(), a = i.toByteArray();
  for (let o = 0; o < a.length; o += 1)
    s.writeByte(a[o]);
  return s.flush(), "data:image/gif;base64," + s;
};
qr.stringToBytes;
var vl = /* @__PURE__ */ I("<div> </div>"), hl = /* @__PURE__ */ I('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), pl = /* @__PURE__ */ I('<div class="mt-4 pt-4 border-t border-blue-200"><div class="flex items-start gap-4"><div class="bg-white border border-gray-200 rounded-lg p-2 shrink-0" style="width: 200px; height: 200px;"></div> <div class="flex flex-col gap-2"><span class="text-sm font-medium text-blue-800">QR Code</span> <p class="text-xs text-gray-600">Scan to open the invitation link. Share via screenshot, print, or display on screen.</p> <button class="mt-1 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors w-fit"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg> Download QR</button></div></div></div>'), gl = /* @__PURE__ */ I('<div class="mt-4 border border-blue-200 bg-blue-50 rounded-lg p-4"><div class="flex items-center gap-2 mb-2"><span class="text-blue-800 font-medium text-sm">Invitation Link</span></div> <div class="flex items-center gap-2"><code class="flex-1 bg-white border border-blue-200 rounded px-3 py-2 text-sm font-mono break-all select-all"> </code> <button> </button></div> <p class="mt-2 text-sm text-amber-700 font-medium">⚠ Copy this link now — it cannot be retrieved later.</p> <!></div>'), _l = /* @__PURE__ */ I('<div class="text-center py-10"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading invitations…</p></div>'), bl = /* @__PURE__ */ I('<div class="text-center py-10"><p class="text-gray-500">No invitation codes found.</p></div>'), xl = /* @__PURE__ */ I('<button class="px-3 py-1 text-xs font-medium text-red-600 border border-red-200 rounded-lg hover:bg-red-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"> </button>'), yl = /* @__PURE__ */ I('<tr class="hover:bg-gray-50 transition-colors"><td class="px-4 py-3"><span class="font-mono text-xs bg-gray-100 px-2 py-1 rounded cursor-help"> </span></td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-700"> </td><td class="px-4 py-3"><span> </span></td><td class="px-4 py-3 text-gray-600 text-xs"> </td><td class="px-4 py-3 text-right"><!></td></tr>'), ml = /* @__PURE__ */ I('<div class="overflow-x-auto"><table class="w-full text-sm"><thead class="bg-gray-50 border-b border-gray-200"><tr><th class="px-4 py-3 text-left font-medium text-gray-600">Code Hash</th><th class="px-4 py-3 text-left font-medium text-gray-600">Profile</th><th class="px-4 py-3 text-left font-medium text-gray-600">Uses</th><th class="px-4 py-3 text-left font-medium text-gray-600">Status</th><th class="px-4 py-3 text-left font-medium text-gray-600">Expires</th><th class="px-4 py-3 text-right font-medium text-gray-600">Actions</th></tr></thead><tbody class="divide-y divide-gray-200"></tbody></table></div>'), wl = /* @__PURE__ */ I('<!> <div class="space-y-6"><div class="bg-white shadow-sm rounded-lg p-6 border border-gray-200"><h2 class="text-lg font-semibold text-gray-900 mb-4">Generate New Invitation</h2> <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4"><div><label for="inv-profile" class="block text-sm font-medium text-gray-700 mb-1">Profile</label> <select id="inv-profile" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"><option>Member</option><option>Administrator</option></select></div> <div><label for="inv-max-uses" class="block text-sm font-medium text-gray-700 mb-1">Max Uses</label> <input id="inv-max-uses" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div> <div><label for="inv-expiry" class="block text-sm font-medium text-gray-700 mb-1">Expires in (hours)</label> <input id="inv-expiry" type="number" min="1" class="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"/></div></div> <button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <!></div> <div class="bg-white shadow-sm rounded-lg border border-gray-200"><div class="px-6 py-4 border-b border-gray-200 flex items-center justify-between"><h2 class="text-lg font-semibold text-gray-900">Invitations</h2> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!></div></div>', 1);
function kl(t, e) {
  Ei(e, !0);
  const r = e.ctx.theme?.cn ?? ((...D) => D.filter(Boolean).join(" "));
  let n = /* @__PURE__ */ O(Me([])), i = /* @__PURE__ */ O(0), s = /* @__PURE__ */ O("member"), a = /* @__PURE__ */ O(1), o = /* @__PURE__ */ O(24), l = /* @__PURE__ */ O(!1), f = /* @__PURE__ */ O(null), p = /* @__PURE__ */ O(!1), v = /* @__PURE__ */ O(null), h = /* @__PURE__ */ O(Me([])), m = /* @__PURE__ */ O(!1), b = /* @__PURE__ */ O(null);
  function L(D, H = "success") {
    const at = So(i);
    E(n, [...u(n), { id: at, text: D, type: H }], !0), setTimeout(
      () => {
        E(n, u(n).filter((ft) => ft.id !== at), !0);
      },
      4e3
    );
  }
  function B(D) {
    const H = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", at = crypto.getRandomValues(new Uint8Array(D));
    return Array.from(at, (ft) => H[ft % H.length]).join("");
  }
  async function $(D) {
    const at = new TextEncoder().encode(D), ft = await crypto.subtle.digest("SHA-256", at);
    return Array.from(new Uint8Array(ft)).map((ot) => ot.toString(16).padStart(2, "0")).join("");
  }
  async function F() {
    E(l, !0), E(f, null), E(v, null), E(p, !1);
    try {
      const D = B(16), H = await $(D);
      await e.ctx.callSync("generate_registration_url", {
        code_hash: H,
        profile: u(s),
        max_uses: u(a),
        expires_in_hours: u(o),
        user_id: "admin",
        created_by: "admin",
        frontend_url: ""
      });
      const at = `${window.location.origin}/join?invite=${D}`;
      E(f, at), E(v, pt(at), !0), L("Invitation code generated successfully"), await bt();
    } catch (D) {
      L(`Failed to generate invitation: ${D?.message || String(D)}`, "error");
    } finally {
      E(l, !1);
    }
  }
  async function dt() {
    u(f) && (await navigator.clipboard.writeText(u(f)), E(p, !0), L("Link copied to clipboard"), setTimeout(
      () => {
        E(p, !1);
      },
      3e3
    ));
  }
  function pt(D) {
    const H = qr(0, "M");
    H.addData(D), H.make();
    const at = H.getModuleCount(), ft = 4, St = at + ft * 2, ot = [];
    for (let Tt = 0; Tt < at; Tt++)
      for (let te = 0; te < at; te++)
        H.isDark(Tt, te) && ot.push(`<rect x="${te + ft}" y="${Tt + ft}" width="1" height="1"/>`);
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${St} ${St}" shape-rendering="crispEdges"><rect width="${St}" height="${St}" fill="#fff"/><g fill="#000">${ot.join("")}</g></svg>`;
  }
  function lt() {
    if (!u(v)) return;
    const D = 400, H = document.createElement("canvas");
    H.width = D, H.height = D;
    const at = H.getContext("2d"), ft = new Image(), St = new Blob([u(v)], { type: "image/svg+xml;charset=utf-8" }), ot = URL.createObjectURL(St);
    ft.onload = () => {
      at.fillStyle = "#fff", at.fillRect(0, 0, D, D), at.drawImage(ft, 0, 0, D, D), URL.revokeObjectURL(ot);
      const Tt = document.createElement("a");
      Tt.download = "invite-qr.png", Tt.href = H.toDataURL("image/png"), Tt.click(), L("QR code downloaded");
    }, ft.src = ot;
  }
  async function bt() {
    E(m, !0);
    try {
      const D = await e.ctx.callSync("get_registration_codes", { include_used: !0 }), H = D?.data ?? D;
      E(h, Array.isArray(H) ? H : H?.codes ?? [], !0);
    } catch (D) {
      L(`Failed to load codes: ${D?.message || String(D)}`, "error"), E(h, [], !0);
    } finally {
      E(m, !1);
    }
  }
  async function g(D) {
    E(b, D, !0);
    try {
      await e.ctx.callSync("revoke_registration_code", { code_hash: D }), L("Invitation revoked"), await bt();
    } catch (H) {
      L(`Failed to revoke: ${H?.message || String(H)}`, "error");
    } finally {
      E(b, null);
    }
  }
  function w(D) {
    return D.revoked ? { label: "Revoked", color: "bg-red-100 text-red-700" } : D.max_uses > 0 && D.uses_count >= D.max_uses ? { label: "Used", color: "bg-gray-100 text-gray-700" } : D.expires_at && new Date(D.expires_at) < /* @__PURE__ */ new Date() ? { label: "Expired", color: "bg-yellow-100 text-yellow-700" } : { label: "Active", color: "bg-green-100 text-green-700" };
  }
  function d(D) {
    if (!D) return "Never";
    const H = new Date(D), at = /* @__PURE__ */ new Date(), ft = H.getTime() - at.getTime();
    return ft < 0 ? "Expired" : ft < 36e5 ? `${Math.round(ft / 6e4)}m remaining` : ft < 864e5 ? `${Math.round(ft / 36e5)}h remaining` : H.toLocaleDateString();
  }
  Oo(() => {
    bt();
  });
  var k = wl(), x = ie(k);
  {
    var M = (D) => {
      var H = hl();
      Re(H, 21, () => u(n), (at) => at.id, (at, ft) => {
        var St = vl(), ot = y(St);
        q(
          (Tt) => {
            fe(St, 1, Tt), j(ot, u(ft).text);
          },
          [
            () => ue(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", u(ft).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), R(at, St);
      }), R(D, H);
    };
    et(x, (D) => {
      u(n).length > 0 && D(M);
    });
  }
  var N = A(x, 2), Z = y(N), z = A(y(Z), 2), ut = y(z), P = A(y(ut), 2), it = y(P);
  it.value = it.__value = "member";
  var yt = A(it);
  yt.value = yt.__value = "admin";
  var kt = A(ut, 2), Kr = A(y(kt), 2), kr = A(kt, 2), Nt = A(y(kr), 2), Ne = A(z, 2), yn = y(Ne), mn = A(Ne, 2);
  {
    var qn = (D) => {
      var H = gl(), at = A(y(H), 2), ft = y(at), St = y(ft), ot = A(ft, 2), Tt = y(ot), te = A(at, 4);
      {
        var Ar = ($t) => {
          var Tr = pl(), Cr = y(Tr), Je = y(Cr);
          Qa(Je, () => u(v), !0);
          var Mr = A(Je, 2), Sr = A(y(Mr), 4);
          nt("click", Sr, lt), R($t, Tr);
        };
        et(te, ($t) => {
          u(v) && $t(Ar);
        });
      }
      q(
        ($t) => {
          j(St, u(f)), fe(ot, 1, $t), j(Tt, u(p) ? "Copied!" : "Copy");
        },
        [
          () => ue(r("px-4 py-2 rounded-lg text-sm font-medium transition-colors shrink-0", u(p) ? "bg-green-600 text-white" : "bg-blue-600 text-white hover:bg-blue-700"))
        ]
      ), nt("click", ot, dt), R(D, H);
    };
    et(mn, (D) => {
      u(f) && D(qn);
    });
  }
  var wn = A(Z, 2), Qr = y(wn), kn = A(y(Qr), 2), Kn = A(Qr, 2);
  {
    var Er = (D) => {
      var H = _l();
      R(D, H);
    }, Qn = (D) => {
      var H = bl();
      R(D, H);
    }, Wn = (D) => {
      var H = ml(), at = y(H), ft = A(y(at));
      Re(ft, 21, () => u(h), sr, (St, ot) => {
        const Tt = /* @__PURE__ */ On(() => w(u(ot)));
        var te = yl(), Ar = y(te), $t = y(Ar), Tr = y($t), Cr = A(Ar), Je = y(Cr), Mr = y(Je), Sr = A(Cr), En = y(Sr), An = A(Sr), Tn = y(An), Cn = y(Tn), Wr = A(An), Mn = y(Wr), Zn = A(Wr), Zr = y(Zn);
        {
          var Xn = (rr) => {
            var $e = xl(), Xr = y($e);
            q(() => {
              $e.disabled = u(b) === u(ot).code_hash, j(Xr, u(b) === u(ot).code_hash ? "Revoking…" : "Revoke");
            }), nt("click", $e, () => g(u(ot).code_hash)), R(rr, $e);
          };
          et(Zr, (rr) => {
            !u(ot).revoked && !(u(ot).max_uses > 0 && u(ot).uses_count >= u(ot).max_uses) && rr(Xn);
          });
        }
        q(
          (rr, $e, Xr, zn) => {
            ns($t, "title", u(ot).code_hash), j(Tr, `${rr ?? ""}…`), fe(Je, 1, $e), j(Mr, u(ot).profile === "admin" ? "Admin" : "Member"), j(En, `${u(ot).uses_count ?? ""} / ${(u(ot).max_uses || "∞") ?? ""}`), fe(Tn, 1, Xr), j(Cn, u(Tt).label), j(Mn, zn);
          },
          [
            () => u(ot).code_hash.slice(0, 12),
            () => ue(r("px-2 py-0.5 rounded-full text-xs font-medium", u(ot).profile === "admin" ? "bg-purple-100 text-purple-700" : "bg-blue-100 text-blue-700")),
            () => ue(r("px-2 py-0.5 rounded-full text-xs font-medium", u(Tt).color)),
            () => d(u(ot).expires_at)
          ]
        ), R(St, te);
      }), R(D, H);
    };
    et(Kn, (D) => {
      u(m) ? D(Er) : u(h).length === 0 ? D(Qn, 1) : D(Wn, -1);
    });
  }
  q(() => {
    Ne.disabled = u(l), j(yn, u(l) ? "Generating…" : "Generate Invitation"), kn.disabled = u(m);
  }), rs(P, () => u(s), (D) => E(s, D)), mi(Kr, () => u(a), (D) => E(a, D)), mi(Nt, () => u(o), (D) => E(o, D)), nt("click", Ne, F), nt("click", kn, bt), R(t, k), Ai();
}
zo(["click"]);
var El = /* @__PURE__ */ I("<div> </div>"), Al = /* @__PURE__ */ I('<div class="fixed top-4 right-4 z-50 flex flex-col gap-2"></div>'), Tl = /* @__PURE__ */ I('<br/><span class="text-gray-500"> </span>', 1), Cl = /* @__PURE__ */ I('<div class="fixed inset-0 bg-black/50 z-40 flex items-center justify-center"><div class="bg-white rounded-xl shadow-xl p-6 max-w-md mx-4"><h3 class="text-lg font-bold text-gray-900 mb-2">Confirm Delete</h3> <p class="text-gray-600 mb-4">Are you sure you want to delete <strong> </strong>? <!></p> <p class="text-red-600 text-sm mb-4">This action cannot be undone.</p> <div class="flex justify-end gap-3"><button class="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">Cancel</button> <button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium">Delete</button></div></div></div>'), Ml = /* @__PURE__ */ I('<div class="mb-4 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm"> <button class="ml-2 text-red-600 hover:text-red-800 font-bold">&times;</button></div>'), Sl = /* @__PURE__ */ I('<div class="text-xs text-gray-400">Loading…</div>'), Dl = /* @__PURE__ */ I('<div class="text-xs text-red-500"> </div>'), Ll = /* @__PURE__ */ I('<span class="mx-1">·</span> <span class="text-yellow-600 font-medium"> </span>', 1), Nl = /* @__PURE__ */ I('<div class="text-xs text-gray-500"> <!></div>'), Bl = /* @__PURE__ */ I('<div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4"><div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Entity Types</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Extensions</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Codexes</div> <div class="text-2xl font-bold text-gray-900 mt-1"> </div></div> <div class="bg-white shadow-sm rounded-lg p-4 border border-gray-200"><div class="text-xs text-gray-500 uppercase tracking-wide">Updates</div> <div> </div></div></div>'), Rl = /* @__PURE__ */ I('<div class="flex items-center gap-2 text-gray-400 text-sm"><div class="animate-spin h-4 w-4 border-2 border-blue-500 border-t-transparent rounded-full"></div> Loading types…</div>'), Il = /* @__PURE__ */ I("<option> </option>"), Pl = /* @__PURE__ */ I('<select id="entity-type-select" class="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"></select>'), Ol = /* @__PURE__ */ I("<button> </button>"), jl = /* @__PURE__ */ I('<div class="text-center py-10 p-6"><div class="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></div> <p class="mt-2 text-gray-600">Loading data…</p></div>'), Fl = /* @__PURE__ */ I('<div class="text-center py-10 p-6"><p class="text-gray-500 text-lg">No items loaded. Select an entity type and click "Load Data".</p></div>'), Ul = /* @__PURE__ */ I('<span class="text-gray-700 truncate"> </span>'), Hl = /* @__PURE__ */ I('<div class="min-w-0"><span class="font-semibold text-gray-700"> </span> <span class="text-gray-600 ml-2 break-all"> </span></div>'), Jl = /* @__PURE__ */ I('<div class="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200"><div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm"></div> <div class="mt-3 pt-3 border-t border-gray-200"><details><summary class="text-xs text-gray-500 cursor-pointer hover:text-gray-700">Raw JSON</summary> <pre class="mt-2 p-3 bg-white rounded border border-gray-200 text-xs font-mono overflow-auto max-h-64 whitespace-pre-wrap break-all"> </pre></details></div></div>'), $l = /* @__PURE__ */ I('<div class="p-4 hover:bg-gray-50 transition"><div class="flex items-center justify-between"><div class="flex-1 min-w-0"><div class="flex items-center gap-3"><button class="text-blue-600 hover:text-blue-800 font-medium whitespace-nowrap"> </button> <!></div></div> <div class="flex items-center gap-1 ml-2 shrink-0"><button class="p-1.5 hover:bg-gray-100 text-gray-600 hover:text-gray-900 rounded transition-colors" title="Copy JSON"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"></path></svg></button> <button class="p-1.5 hover:bg-red-50 text-gray-400 hover:text-red-600 rounded transition-colors disabled:opacity-50" title="Delete entity"><svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg></button></div></div> <!></div>'), Vl = /* @__PURE__ */ I('<div class="border-t border-gray-200 p-4 flex items-center justify-between"><div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">First</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Prev</button></div> <span class="text-sm text-gray-600"> </span> <div class="flex items-center gap-2"><button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Next</button> <button class="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed text-sm">Last</button></div></div>'), Yl = /* @__PURE__ */ I('<div class="divide-y divide-gray-200"></div> <!>', 1), Gl = /* @__PURE__ */ I('<div class="mb-4 flex items-center gap-4"><button class="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <div class="ml-auto text-gray-600 text-sm"><!></div></div> <div class="bg-white shadow-sm rounded-lg"><!></div>', 1), ql = /* @__PURE__ */ I('<div class="flex items-center gap-3 text-gray-600"><div class="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div> Exporting…</div>'), Kl = /* @__PURE__ */ I(", <strong> </strong> codexes", 1), Ql = /* @__PURE__ */ I('<div class="border border-gray-200 rounded-lg overflow-hidden"><div class="bg-gray-50 px-4 py-3 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2"><div class="text-sm text-gray-700"><strong> </strong> entities <!></div> <div class="flex gap-2"><button class="px-4 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 font-medium transition-colors">Download JSON</button> <button class="px-4 py-1.5 border border-gray-300 text-sm rounded-lg hover:bg-gray-50 font-medium transition-colors">Copy to Clipboard</button></div></div> <div class="max-h-96 overflow-auto"><pre class="p-4 text-xs text-gray-800 font-mono whitespace-pre-wrap break-all"> </pre></div></div>'), Wl = /* @__PURE__ */ I('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Export Entities</h2> <p class="text-gray-600 text-sm mb-6">Export entities as a JSON file. You can export a single entity type or all types at once.</p> <div class="flex gap-3 mb-6"><button class="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 bg-gray-700 text-white rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button></div> <!> <!></div>'), Zl = /* @__PURE__ */ I('<p class="text-blue-600 font-medium"> </p> <p class="text-sm text-gray-500 mt-1">Click or drop to replace</p>', 1), Xl = /* @__PURE__ */ I('<svg class="mx-auto h-10 w-10 text-gray-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg> <p class="text-gray-600 font-medium">Drop a JSON file here or click to browse</p> <p class="text-sm text-gray-400 mt-1">Accepts .json files</p>', 1), zl = /* @__PURE__ */ I('<div role="button" tabindex="0"><input type="file" accept=".json" class="hidden"/> <!></div>'), tu = /* @__PURE__ */ I('<button class="absolute top-2 right-2 px-2 py-1 text-xs text-gray-500 hover:text-gray-700 bg-white border border-gray-200 rounded">Clear</button>'), eu = /* @__PURE__ */ I('<div class="relative"><textarea class="w-full h-64 p-4 border border-gray-300 rounded-lg font-mono text-sm resize-y focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500" spellcheck="false"></textarea> <!></div>'), ru = /* @__PURE__ */ I('<span class="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"> </span>'), nu = /* @__PURE__ */ I('<div class="bg-green-50 px-4 py-3 border-b border-green-200"><p class="text-sm font-medium text-green-800"> <!></p></div> <div class="px-4 py-3"><div class="flex flex-wrap gap-2"></div> <div class="mt-4 flex gap-3"><button class="px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium transition-colors"> </button> <button class="px-5 py-2.5 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium disabled:opacity-50 transition-colors">Cancel</button></div></div>', 1), iu = /* @__PURE__ */ I('<div class="bg-red-50 px-4 py-3"><p class="text-sm font-medium text-red-800">Invalid JSON</p> <p class="text-sm text-red-600 mt-1"> </p></div>'), ou = /* @__PURE__ */ I("<div><!></div>"), su = /* @__PURE__ */ I("<li> </li>"), au = /* @__PURE__ */ I('<ul class="mt-1 list-disc list-inside text-red-600"></ul>'), lu = /* @__PURE__ */ I('<p class="text-red-600"> </p> <!>', 1), uu = /* @__PURE__ */ I('<div class="mt-2 text-sm text-green-700"><p> </p> <p> </p> <!></div>'), fu = /* @__PURE__ */ I('<p class="text-sm font-medium text-green-800">Import complete</p> <!>', 1), cu = /* @__PURE__ */ I('<p class="text-sm font-medium text-red-800">Import failed</p> <p class="text-sm text-red-600 mt-1"> </p>', 1), du = /* @__PURE__ */ I('<div><div class="px-4 py-3"><!></div></div>'), vu = /* @__PURE__ */ I('<div class="bg-white shadow-sm rounded-lg p-6"><h2 class="text-lg font-semibold text-gray-900 mb-4">Import Entities</h2> <p class="text-gray-600 text-sm mb-6">Import entities from a JSON file or paste JSON directly. Existing entities with the same type and ID will be updated (upsert).</p> <div class="flex gap-2 mb-4"><button>Upload File</button> <button>JSON Editor</button></div> <!> <!> <!></div>'), hu = /* @__PURE__ */ I('<!> <!> <div class="w-full px-4 max-w-none"><div class="flex justify-between items-center mb-6"><div><h1 class="text-3xl font-bold text-gray-900">Admin Dashboard</h1> <p class="text-gray-600 mt-1">Manage realm entities</p></div> <button class="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors disabled:opacity-50" title="Refresh"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div> <!> <button class="block w-full mb-4 bg-white shadow-sm rounded-lg p-4 border border-gray-200 hover:border-blue-400 hover:shadow transition-all text-left cursor-pointer"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-3"><div class="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center text-xl">📦</div> <div><div class="text-sm font-medium text-gray-700">Packages</div> <!></div></div> <span class="text-blue-600 text-sm font-medium">Manage →</span></div></button> <!> <div class="mb-4 bg-white shadow-sm rounded-lg p-4"><div class="flex items-center gap-4 flex-wrap"><label for="entity-type-select" class="font-medium text-gray-700">Entity Type:</label> <!></div></div> <div class="mb-4 border-b border-gray-200"><nav class="flex gap-1" aria-label="Tabs"></nav></div> <!></div>', 1);
function pu(t, e) {
  Ei(e, !0);
  const r = e.ctx.theme?.cn ?? ((..._) => _.filter(Boolean).join(" ")), n = {
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
  let i = /* @__PURE__ */ O(Me([])), s = /* @__PURE__ */ O(""), a = /* @__PURE__ */ O("browse"), o = /* @__PURE__ */ O(!0), l = /* @__PURE__ */ O(""), f = /* @__PURE__ */ O(Me([])), p = /* @__PURE__ */ O(0), v = /* @__PURE__ */ O(Me([])), h = /* @__PURE__ */ O(!1), m = /* @__PURE__ */ O(null), b = /* @__PURE__ */ O(0), L = 10, B = /* @__PURE__ */ O(0), $ = /* @__PURE__ */ O(0), F = /* @__PURE__ */ O(null), dt = /* @__PURE__ */ O(null), pt = /* @__PURE__ */ O(!1), lt = /* @__PURE__ */ O(null), bt = /* @__PURE__ */ O("file"), g = /* @__PURE__ */ O(""), w = /* @__PURE__ */ O(""), d = /* @__PURE__ */ O(null), k = /* @__PURE__ */ O(!1), x = /* @__PURE__ */ O(null), M = /* @__PURE__ */ O(void 0), N = /* @__PURE__ */ O(!1), Z = /* @__PURE__ */ O(null), z = /* @__PURE__ */ O(0), ut = /* @__PURE__ */ O(!0), P = /* @__PURE__ */ O(""), it = /* @__PURE__ */ O(0), yt = /* @__PURE__ */ O(0);
  function kt(_, T = "success") {
    const C = So(p);
    E(f, [...u(f), { id: C, text: _, type: T }], !0), setTimeout(
      () => {
        E(f, u(f).filter((S) => S.id !== C), !0);
      },
      4e3
    );
  }
  function Kr(_) {
    return n[_] || "📊";
  }
  function kr(_) {
    return _.replace(/([A-Z])/g, " $1").trim();
  }
  async function Nt(_, T = {}) {
    return await e.ctx.callSync(_, T);
  }
  function Ne(_) {
    if (_?.success && _?.data?.objectsListPaginated) {
      const T = _.data.objectsListPaginated;
      return { objects: (T.objects || []).map((S) => {
        try {
          return typeof S == "string" ? JSON.parse(S) : S;
        } catch {
          return S;
        }
      }), pagination: T.pagination };
    }
    return _?.data && Array.isArray(_.data) ? { objects: _.data, pagination: null } : { objects: [], pagination: null };
  }
  async function yn() {
    E(o, !0), E(l, "");
    try {
      const _ = await Nt("get_entity_types"), T = _?.data ?? (Array.isArray(_) ? _ : []);
      E(
        i,
        T.map((C) => ({
          value: C,
          label: `${Kr(C)} ${kr(C)}`,
          className: C
        })),
        !0
      ), u(i).length > 0 && !u(s) && E(s, u(i)[0].value, !0);
    } catch (_) {
      E(l, _?.message || String(_), !0), E(i, [{ value: "User", label: "👤 User", className: "User" }], !0), u(s) || E(s, "User");
    } finally {
      E(o, !1);
    }
  }
  async function mn() {
    E(ut, !0), E(P, "");
    try {
      const [_, T, C] = await Promise.all([
        e.ctx.backend.list_runtime_extensions().catch(() => "{}"),
        e.ctx.backend.list_codex_packages().catch(() => "{}"),
        e.ctx.backend.status().catch(() => null)
      ]), S = typeof _ == "string" ? JSON.parse(_) : _, J = typeof T == "string" ? JSON.parse(T) : T, K = S?.success ? S.runtime_extensions ?? [] : [], ht = J?.success ? J.codex_packages ?? [] : [], Ct = S?.success ? S.all_manifests ?? {} : {}, Bt = J?.success ? J.manifests ?? {} : {};
      E(it, Object.keys(Ct).length || K.length, !0), E(
        yt,
        Array.isArray(ht) ? ht.length : Object.keys(Bt).length,
        !0
      ), E(Z, u(it) + u(yt));
      const ee = C?.success && C?.data?.status?.registries || [];
      let Vt = 0;
      for (const Et of ee)
        try {
          const tt = qn(Et.canister_id);
          if (!tt) continue;
          const [U, st] = await Promise.all([
            fetch(`${tt}/api/extensions`, { headers: { Accept: "application/json" } }).then((ct) => ct.ok ? ct.json() : []).catch(() => []),
            fetch(`${tt}/api/codices`, { headers: { Accept: "application/json" } }).then((ct) => ct.ok ? ct.json() : []).catch(() => [])
          ]);
          for (const ct of U) {
            if (!K.includes(ct.ext_id)) continue;
            const Dt = Ct?.[ct.ext_id]?.version;
            Dt && ct.latest && wn(ct.latest, Dt) && Vt++;
          }
          for (const ct of st) {
            if (!ht.includes(ct.codex_id)) continue;
            const Dt = Bt?.[ct.codex_id]?.version;
            Dt && ct.latest && wn(ct.latest, Dt) && Vt++;
          }
        } catch {
        }
      E(z, Vt, !0);
    } catch (_) {
      E(P, _?.message ?? String(_), !0);
    } finally {
      E(ut, !1);
    }
  }
  function qn(_) {
    if (typeof window > "u") return null;
    const T = window.location.host;
    if (T.includes("localhost") || T.includes("127.0.0.1")) {
      const S = T.split(":")[1] ?? "4943";
      return `http://${_}.localhost:${S}`;
    }
    return `https://${_}.icp0.io`;
  }
  function wn(_, T) {
    const C = (_ || "").split("-", 1)[0].split(".").map((K) => parseInt(K, 10) || 0), S = (T || "").split("-", 1)[0].split(".").map((K) => parseInt(K, 10) || 0), J = Math.max(C.length, S.length);
    for (let K = 0; K < J; K++) {
      const ht = C[K] ?? 0, Ct = S[K] ?? 0;
      if (ht !== Ct) return ht > Ct;
    }
    return !1;
  }
  async function Qr() {
    E(h, !0), E(m, null);
    try {
      const _ = await e.ctx.backend.get_objects_paginated(u(s), u(b), L, "desc"), T = typeof _ == "string" ? JSON.parse(_) : _, { objects: C, pagination: S } = Ne(T);
      E(v, C, !0), S ? (E(B, Number(S.total_items || 0), !0), E($, Number(S.total_pages || 0), !0)) : (E(B, C.length, !0), E($, 1));
    } catch (_) {
      E(l, _?.message || String(_), !0), E(v, [], !0);
    } finally {
      E(h, !1);
    }
  }
  function kn(_) {
    E(m, u(m) === _ ? null : _, !0);
  }
  function Kn(_) {
    navigator.clipboard.writeText(JSON.stringify(_, null, 2)), kt("JSON copied to clipboard");
  }
  function Er(_) {
    E(b, _, !0), Qr();
  }
  function Qn(_) {
    E(dt, _, !0);
  }
  function Wn() {
    E(dt, null);
  }
  async function D() {
    if (!u(dt)) return;
    const _ = u(dt), T = _._type || u(s), C = _._id || _.id;
    E(dt, null), E(F, String(C), !0);
    try {
      const S = await Nt("delete_entity", { entity_type: T, entity_id: String(C) });
      S?.success ? (E(v, u(v).filter((J) => !((J._id || J.id) === C && (J._type || u(s)) === T)), !0), E(B, Math.max(0, u(B) - 1), !0), kt(`Deleted ${T}#${C}`)) : kt(S?.error || "Delete failed", "error");
    } catch (S) {
      kt(`Delete error: ${S?.message}`, "error");
    } finally {
      E(F, null);
    }
  }
  async function H(_ = !1) {
    E(pt, !0), E(lt, null);
    try {
      const T = _ ? { include_codexes: !0 } : { entity_types: [u(s)], include_codexes: !0 }, C = await Nt("export_data", T);
      if (C?.success && C?.data) {
        const S = typeof C.data == "string" ? JSON.parse(C.data) : C.data;
        E(lt, S, !0);
        const J = _ ? `Exported ${S.total_entities ?? "?"} entities, ${S.total_codexes ?? 0} codexes` : `Exported ${S.total_entities ?? "?"} entities`;
        kt(J);
      } else
        kt(C?.error || "Export failed", "error");
    } catch (T) {
      kt(`Export error: ${T?.message}`, "error");
    } finally {
      E(pt, !1);
    }
  }
  function at(_ = !1) {
    if (!u(lt)) return;
    const T = JSON.stringify(u(lt), null, 2), C = new Blob([T], { type: "application/json" }), S = URL.createObjectURL(C), J = document.createElement("a");
    J.href = S;
    const K = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19);
    J.download = _ ? `export_all_${K}.json` : `export_${u(s)}_${K}.json`, J.click(), URL.revokeObjectURL(S), kt("Download started");
  }
  function ft() {
    u(lt) && (navigator.clipboard.writeText(JSON.stringify(u(lt), null, 2)), kt("Copied to clipboard"));
  }
  function St(_) {
    const C = _.target.files?.[0];
    C && Tt(C);
  }
  function ot(_) {
    _.preventDefault(), E(N, !1);
    const T = _.dataTransfer?.files?.[0];
    T && Tt(T);
  }
  function Tt(_) {
    E(w, _.name, !0);
    const T = new FileReader();
    T.onload = (C) => {
      E(g, C.target?.result || "", !0), te();
    }, T.readAsText(_);
  }
  function te() {
    if (E(d, null), E(x, null), !!u(g).trim())
      try {
        const _ = JSON.parse(u(g));
        let T = [], C = [];
        Array.isArray(_) ? T = _ : _.entities ? (T = _.entities || [], C = _.codexes || []) : T = [_];
        const S = {};
        for (const J of T) {
          const K = J._type || "unknown";
          S[K] = (S[K] || 0) + 1;
        }
        E(
          d,
          {
            totalEntities: T.length,
            totalCodexes: C.length,
            typeCounts: S,
            valid: !0,
            entities: T,
            codexes: C
          },
          !0
        );
      } catch (_) {
        E(
          d,
          {
            valid: !1,
            error: _.message,
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
  async function Ar() {
    if (!(!u(d) || !u(d).valid)) {
      E(k, !0), E(x, null);
      try {
        const _ = [...u(d).entities];
        for (const C of u(d).codexes)
          _.push({ ...C, _type: "Codex" });
        const T = await Nt("import_data", { format: "json", data: JSON.stringify(_) });
        if (E(x, T, !0), T?.success) {
          const C = T.data || {};
          kt(`Imported ${C.successful || 0} of ${C.total_records || 0} records`);
        } else
          kt(T?.error || "Import failed", "error");
      } catch (_) {
        E(x, { success: !1, error: _.message }, !0), kt(`Import error: ${_?.message}`, "error");
      } finally {
        E(k, !1);
      }
    }
  }
  function $t() {
    E(g, ""), E(w, ""), E(d, null), E(x, null), u(M) && (u(M).value = "");
  }
  Oo(() => {
    yn(), mn();
  });
  const Tr = [
    { id: "browse", label: "Browse" },
    { id: "export", label: "Export" },
    { id: "import", label: "Import" },
    { id: "invitations", label: "Invitations" }
  ];
  let Cr = /* @__PURE__ */ On(() => u(lt) ? JSON.stringify(u(lt), null, 2) : "");
  var Je = hu(), Mr = ie(Je);
  {
    var Sr = (_) => {
      var T = Al();
      Re(T, 21, () => u(f), (C) => C.id, (C, S) => {
        var J = El(), K = y(J);
        q(
          (ht) => {
            fe(J, 1, ht), j(K, u(S).text);
          },
          [
            () => ue(r("px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all", u(S).type === "error" ? "bg-red-600 text-white" : "bg-green-600 text-white"))
          ]
        ), R(C, J);
      }), R(_, T);
    };
    et(Mr, (_) => {
      u(f).length > 0 && _(Sr);
    });
  }
  var En = A(Mr, 2);
  {
    var An = (_) => {
      var T = Cl(), C = y(T), S = A(y(C), 2), J = A(y(S)), K = y(J), ht = A(J, 2);
      {
        var Ct = (Et) => {
          var tt = Tl(), U = A(ie(tt)), st = y(U);
          q(() => j(st, `(${u(dt).name ?? ""})`)), R(Et, tt);
        };
        et(ht, (Et) => {
          u(dt).name && Et(Ct);
        });
      }
      var Bt = A(S, 4), ee = y(Bt), Vt = A(ee, 2);
      q(() => j(K, `${(u(dt)._type || u(s)) ?? ""}#${(u(dt)._id || u(dt).id) ?? ""}`)), nt("click", ee, Wn), nt("click", Vt, D), R(_, T);
    };
    et(En, (_) => {
      u(dt) && _(An);
    });
  }
  var Tn = A(En, 2), Cn = y(Tn), Wr = A(y(Cn), 2), Mn = A(Cn, 2);
  {
    var Zn = (_) => {
      var T = Ml(), C = y(T), S = A(C);
      q(() => j(C, `${u(l) ?? ""} `)), nt("click", S, () => E(l, "")), R(_, T);
    };
    et(Mn, (_) => {
      u(l) && _(Zn);
    });
  }
  var Zr = A(Mn, 2), Xn = y(Zr), rr = y(Xn), $e = A(y(rr), 2), Xr = A(y($e), 2);
  {
    var zn = (_) => {
      var T = Sl();
      R(_, T);
    }, os = (_) => {
      var T = Dl(), C = y(T);
      q(() => j(C, u(P))), R(_, T);
    }, ss = (_) => {
      var T = Nl(), C = y(T), S = A(C);
      {
        var J = (K) => {
          var ht = Ll(), Ct = A(ie(ht), 2), Bt = y(Ct);
          q(() => j(Bt, `${u(z) ?? ""} update${u(z) === 1 ? "" : "s"} available`)), R(K, ht);
        };
        et(S, (K) => {
          u(z) > 0 && K(J);
        });
      }
      q(() => j(C, `${u(Z) ?? 0 ?? ""} installed `)), R(_, T);
    };
    et(Xr, (_) => {
      u(ut) ? _(zn) : u(P) ? _(os, 1) : _(ss, -1);
    });
  }
  var Fi = A(Zr, 2);
  {
    var as = (_) => {
      var T = Bl(), C = y(T), S = A(y(C), 2), J = y(S), K = A(C, 2), ht = A(y(K), 2), Ct = y(ht), Bt = A(K, 2), ee = A(y(Bt), 2), Vt = y(ee), Et = A(Bt, 2), tt = A(y(Et), 2), U = y(tt);
      q(
        (st) => {
          j(J, u(i).length), j(Ct, u(it)), j(Vt, u(yt)), fe(tt, 1, st), j(U, u(ut) ? "…" : u(z));
        },
        [
          () => ue(r("text-2xl font-bold mt-1", u(z) > 0 ? "text-yellow-600" : "text-gray-900"))
        ]
      ), R(_, T);
    };
    et(Fi, (_) => {
      u(o) || _(as);
    });
  }
  var Ui = A(Fi, 2), ls = y(Ui), us = A(y(ls), 2);
  {
    var fs = (_) => {
      var T = Rl();
      R(_, T);
    }, cs = (_) => {
      var T = Pl();
      Re(T, 21, () => u(i), sr, (C, S) => {
        var J = Il(), K = y(J), ht = {};
        q(() => {
          j(K, u(S).label), ht !== (ht = u(S).value) && (J.value = (J.__value = u(S).value) ?? "");
        }), R(C, J);
      }), rs(T, () => u(s), (C) => E(s, C)), R(_, T);
    };
    et(us, (_) => {
      u(o) ? _(fs) : _(cs, -1);
    });
  }
  var Hi = A(Ui, 2), ds = y(Hi);
  Re(ds, 21, () => Tr, sr, (_, T) => {
    var C = Ol(), S = y(C);
    q(
      (J) => {
        fe(C, 1, J), j(S, u(T).label);
      },
      [
        () => ue(r("px-5 py-2.5 text-sm font-medium rounded-t-lg border-b-2 transition-colors", u(a) === u(T).id ? "border-blue-600 text-blue-600 bg-blue-50" : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"))
      ]
    ), nt("click", C, () => E(a, u(T).id, !0)), R(_, C);
  });
  var vs = A(Hi, 2);
  {
    var hs = (_) => {
      var T = Gl(), C = ie(T), S = y(C), J = y(S), K = A(S, 2), ht = y(K);
      {
        var Ct = (U) => {
          var st = ro();
          q(() => j(st, `Showing ${u(v).length ?? ""} of ${u(B) ?? ""} items`)), R(U, st);
        };
        et(ht, (U) => {
          u(v).length > 0 && U(Ct);
        });
      }
      var Bt = A(C, 2), ee = y(Bt);
      {
        var Vt = (U) => {
          var st = jl();
          R(U, st);
        }, Et = (U) => {
          var st = Fl();
          R(U, st);
        }, tt = (U) => {
          var st = Yl(), ct = ie(st);
          Re(ct, 21, () => u(v), sr, (Y, rt, mt) => {
            var Lt = $l(), Yt = y(Lt), re = y(Yt), me = y(re), Ft = y(me), Gt = y(Ft), qt = A(Ft, 2);
            {
              var nr = (Kt) => {
                var ke = Ul(), Ee = y(ke);
                q(() => j(Ee, `- ${u(rt).name ?? ""}`)), R(Kt, ke);
              };
              et(qt, (Kt) => {
                u(rt).name && Kt(nr);
              });
            }
            var Dr = A(re, 2), ne = y(Dr), we = A(ne, 2), ir = A(Yt, 2);
            {
              var Lr = (Kt) => {
                var ke = Jl(), Ee = y(ke);
                Re(Ee, 21, () => Object.entries(u(rt)), sr, (zr, bs) => {
                  var Ji = /* @__PURE__ */ On(() => qi(u(bs), 2));
                  let xs = () => u(Ji)[0], ri = () => u(Ji)[1];
                  var $i = Hl(), Vi = y($i), ys = y(Vi), ms = A(Vi, 2), ws = y(ms);
                  q(
                    (ks) => {
                      j(ys, `${xs() ?? ""}:`), j(ws, ks);
                    },
                    [
                      () => typeof ri() == "object" ? JSON.stringify(ri()) : String(ri())
                    ]
                  ), R(zr, $i);
                });
                var Nr = A(Ee, 2), ti = y(Nr), ei = A(y(ti), 2), Sn = y(ei);
                q((zr) => j(Sn, zr), [() => JSON.stringify(u(rt), null, 2)]), R(Kt, ke);
              };
              et(ir, (Kt) => {
                u(m) === mt && Kt(Lr);
              });
            }
            q(
              (Kt) => {
                j(Gt, `${u(m) === mt ? "▼" : "▶"}
											${(u(rt)._type || u(s)) ?? ""} #${(u(rt)._id || u(rt).id || mt + 1) ?? ""}`), we.disabled = Kt;
              },
              [
                () => u(F) === String(u(rt)._id || u(rt).id)
              ]
            ), nt("click", Ft, () => kn(mt)), nt("click", ne, () => Kn(u(rt))), nt("click", we, () => Qn(u(rt))), R(Y, Lt);
          });
          var Dt = A(ct, 2);
          {
            var gt = (Y) => {
              var rt = Vl(), mt = y(rt), Lt = y(mt), Yt = A(Lt, 2), re = A(mt, 2), me = y(re), Ft = A(re, 2), Gt = y(Ft), qt = A(Gt, 2);
              q(() => {
                Lt.disabled = u(b) === 0, Yt.disabled = u(b) === 0, j(me, `Page ${u(b) + 1} of ${u($) ?? ""}`), Gt.disabled = u(b) >= u($) - 1, qt.disabled = u(b) >= u($) - 1;
              }), nt("click", Lt, () => Er(0)), nt("click", Yt, () => Er(u(b) - 1)), nt("click", Gt, () => Er(u(b) + 1)), nt("click", qt, () => Er(u($) - 1)), R(Y, rt);
            };
            et(Dt, (Y) => {
              u($) > 1 && Y(gt);
            });
          }
          R(U, st);
        };
        et(ee, (U) => {
          u(h) ? U(Vt) : u(v).length === 0 ? U(Et, 1) : U(tt, -1);
        });
      }
      q(() => {
        S.disabled = u(h), j(J, u(h) ? "Loading…" : "Load Data");
      }), nt("click", S, Qr), R(_, T);
    }, ps = (_) => {
      var T = Wl(), C = A(y(T), 4), S = y(C), J = y(S), K = A(S, 2), ht = y(K), Ct = A(C, 2);
      {
        var Bt = (Et) => {
          var tt = ql();
          R(Et, tt);
        };
        et(Ct, (Et) => {
          u(pt) && Et(Bt);
        });
      }
      var ee = A(Ct, 2);
      {
        var Vt = (Et) => {
          var tt = Ql(), U = y(tt), st = y(U), ct = y(st), Dt = y(ct), gt = A(ct, 2);
          {
            var Y = (Ft) => {
              var Gt = Kl(), qt = A(ie(Gt)), nr = y(qt);
              q(() => j(nr, u(lt).total_codexes)), R(Ft, Gt);
            };
            et(gt, (Ft) => {
              (u(lt).total_codexes ?? 0) > 0 && Ft(Y);
            });
          }
          var rt = A(st, 2), mt = y(rt), Lt = A(mt, 2), Yt = A(U, 2), re = y(Yt), me = y(re);
          q(() => {
            j(Dt, u(lt).total_entities ?? "?"), j(me, u(Cr));
          }), nt("click", mt, () => at(!1)), nt("click", Lt, ft), R(Et, tt);
        };
        et(ee, (Et) => {
          u(lt) && Et(Vt);
        });
      }
      q(() => {
        S.disabled = u(pt), j(J, u(pt) ? "Exporting…" : `Export ${u(s)}`), K.disabled = u(pt), j(ht, u(pt) ? "Exporting…" : "Export All Types");
      }), nt("click", S, () => H(!1)), nt("click", K, () => H(!0)), R(_, T);
    }, gs = (_) => {
      kl(_, {
        get ctx() {
          return e.ctx;
        }
      });
    }, _s = (_) => {
      var T = vu(), C = A(y(T), 4), S = y(C), J = A(S, 2), K = A(C, 2);
      {
        var ht = (tt) => {
          var U = zl(), st = y(U);
          nl(st, (Y) => E(M, Y), () => u(M));
          var ct = A(st, 2);
          {
            var Dt = (Y) => {
              var rt = Zl(), mt = ie(rt), Lt = y(mt);
              q(() => j(Lt, u(w))), R(Y, rt);
            }, gt = (Y) => {
              var rt = Xl();
              R(Y, rt);
            };
            et(ct, (Y) => {
              u(w) ? Y(Dt) : Y(gt, -1);
            });
          }
          q((Y) => fe(U, 1, Y), [
            () => ue(r("border-2 border-dashed rounded-lg p-8 text-center transition-colors cursor-pointer", u(N) ? "border-blue-500 bg-blue-50" : "border-gray-300 hover:border-gray-400"))
          ]), oi("drop", U, ot), oi("dragover", U, (Y) => {
            Y.preventDefault(), E(N, !0);
          }), oi("dragleave", U, () => E(N, !1)), nt("click", U, () => u(M)?.click()), nt("keydown", U, (Y) => Y.key === "Enter" && u(M)?.click()), nt("change", st, St), R(tt, U);
        }, Ct = (tt) => {
          var U = eu(), st = y(U);
          ns(st, "placeholder", `Paste JSON here, e.g.
[
  {"_type": "User", "_id": "1", "name": "Alice"},
  {"_type": "User", "_id": "2", "name": "Bob"}
]`);
          var ct = A(st, 2);
          {
            var Dt = (gt) => {
              var Y = tu();
              nt("click", Y, $t), R(gt, Y);
            };
            et(ct, (gt) => {
              u(g) && gt(Dt);
            });
          }
          nt("input", st, te), mi(st, () => u(g), (gt) => E(g, gt)), R(tt, U);
        };
        et(K, (tt) => {
          u(bt) === "file" ? tt(ht) : tt(Ct, -1);
        });
      }
      var Bt = A(K, 2);
      {
        var ee = (tt) => {
          var U = ou(), st = y(U);
          {
            var ct = (gt) => {
              var Y = nu(), rt = ie(Y), mt = y(rt), Lt = y(mt), Yt = A(Lt);
              {
                var re = (ne) => {
                  var we = ro();
                  q(() => j(we, `, ${u(d).totalCodexes ?? ""} codexes`)), R(ne, we);
                };
                et(Yt, (ne) => {
                  u(d).totalCodexes > 0 && ne(re);
                });
              }
              var me = A(rt, 2), Ft = y(me);
              Re(Ft, 21, () => Object.entries(u(d).typeCounts), sr, (ne, we) => {
                var ir = /* @__PURE__ */ On(() => qi(u(we), 2));
                let Lr = () => u(ir)[0], Kt = () => u(ir)[1];
                var ke = ru(), Ee = y(ke);
                q((Nr) => j(Ee, `${Nr ?? ""} ${Lr() ?? ""}: ${Kt() ?? ""}`), [() => Kr(Lr())]), R(ne, ke);
              });
              var Gt = A(Ft, 2), qt = y(Gt), nr = y(qt), Dr = A(qt, 2);
              q(() => {
                j(Lt, `Ready to import: ${u(d).totalEntities ?? ""} entities `), qt.disabled = u(k), j(nr, u(k) ? "Importing…" : "Confirm Import"), Dr.disabled = u(k);
              }), nt("click", qt, Ar), nt("click", Dr, $t), R(gt, Y);
            }, Dt = (gt) => {
              var Y = iu(), rt = A(y(Y), 2), mt = y(rt);
              q(() => j(mt, u(d).error)), R(gt, Y);
            };
            et(st, (gt) => {
              u(d).valid ? gt(ct) : gt(Dt, -1);
            });
          }
          q((gt) => fe(U, 1, gt), [
            () => ue(r("mt-4 border rounded-lg overflow-hidden", u(d).valid ? "border-green-200" : "border-red-200"))
          ]), R(tt, U);
        };
        et(Bt, (tt) => {
          u(d) && tt(ee);
        });
      }
      var Vt = A(Bt, 2);
      {
        var Et = (tt) => {
          var U = du(), st = y(U), ct = y(st);
          {
            var Dt = (Y) => {
              var rt = fu(), mt = A(ie(rt), 2);
              {
                var Lt = (Yt) => {
                  var re = uu(), me = y(re), Ft = y(me), Gt = A(me, 2), qt = y(Gt), nr = A(Gt, 2);
                  {
                    var Dr = (ne) => {
                      var we = lu(), ir = ie(we), Lr = y(ir), Kt = A(ir, 2);
                      {
                        var ke = (Ee) => {
                          var Nr = au();
                          Re(Nr, 21, () => u(x).data.errors, sr, (ti, ei) => {
                            var Sn = su(), zr = y(Sn);
                            q(() => j(zr, u(ei))), R(ti, Sn);
                          }), R(Ee, Nr);
                        };
                        et(Kt, (Ee) => {
                          u(x).data.errors?.length && Ee(ke);
                        });
                      }
                      q(() => j(Lr, `Failed: ${u(x).data.failed ?? ""}`)), R(ne, we);
                    };
                    et(nr, (ne) => {
                      (u(x).data.failed ?? 0) > 0 && ne(Dr);
                    });
                  }
                  q(() => {
                    j(Ft, `Total records: ${(u(x).data.total_records || 0) ?? ""}`), j(qt, `Successful: ${(u(x).data.successful || 0) ?? ""}`);
                  }), R(Yt, re);
                };
                et(mt, (Yt) => {
                  u(x).data && Yt(Lt);
                });
              }
              R(Y, rt);
            }, gt = (Y) => {
              var rt = cu(), mt = A(ie(rt), 2), Lt = y(mt);
              q(() => j(Lt, u(x).error)), R(Y, rt);
            };
            et(ct, (Y) => {
              u(x).success ? Y(Dt) : Y(gt, -1);
            });
          }
          q((Y) => fe(U, 1, Y), [
            () => ue(r("mt-4 border rounded-lg overflow-hidden", u(x).success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"))
          ]), R(tt, U);
        };
        et(Vt, (tt) => {
          u(x) && tt(Et);
        });
      }
      q(
        (tt, U) => {
          fe(S, 1, tt), fe(J, 1, U);
        },
        [
          () => ue(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", u(bt) === "file" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200")),
          () => ue(r("px-4 py-2 text-sm font-medium rounded-lg transition-colors", u(bt) === "editor" ? "bg-blue-100 text-blue-700 border border-blue-300" : "bg-gray-100 text-gray-600 hover:bg-gray-200"))
        ]
      ), nt("click", S, () => {
        E(bt, "file"), $t();
      }), nt("click", J, () => {
        E(bt, "editor"), $t();
      }), R(_, T);
    };
    et(vs, (_) => {
      u(a) === "browse" ? _(hs) : u(a) === "export" ? _(ps, 1) : u(a) === "invitations" ? _(gs, 2) : u(a) === "import" && _(_s, 3);
    });
  }
  q(() => Wr.disabled = u(o)), nt("click", Wr, () => {
    yn(), mn();
  }), nt("click", Zr, () => e.ctx.navigate?.("/extensions/package_manager")), R(t, Je), Ai();
}
zo(["click", "keydown", "change", "input"]);
function bu(t, e) {
  const r = Ja(pu, { target: t, props: { ctx: e } });
  return {
    unmount() {
      try {
        Va(r);
      } catch {
      }
    }
  };
}
export {
  bu as default
};
