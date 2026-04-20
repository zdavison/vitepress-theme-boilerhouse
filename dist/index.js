// src/index.ts
import DefaultTheme2 from "vitepress/theme";

// sfc-script:/Users/z/github/vitepress-theme-boilerhouse/src/components/BoilerhouseLayout.vue?type=script
import { defineComponent as _defineComponent } from "vue";
import DefaultTheme from "vitepress/theme";
var BoilerhouseLayout_default = /* @__PURE__ */ _defineComponent({
  __name: "BoilerhouseLayout",
  setup(__props, { expose: __expose }) {
    __expose();
    const { Layout } = DefaultTheme;
    const __returned__ = { Layout };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});

// sfc-template:/Users/z/github/vitepress-theme-boilerhouse/src/components/BoilerhouseLayout.vue?type=template
import { normalizeProps as _normalizeProps, guardReactiveProps as _guardReactiveProps, renderSlot as _renderSlot, withCtx as _withCtx, renderList as _renderList, createSlots as _createSlots, openBlock as _openBlock, createBlock as _createBlock } from "vue";
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return _openBlock(), _createBlock(
    $setup["Layout"],
    null,
    _createSlots({
      _: 2
      /* DYNAMIC */
    }, [
      _renderList(_ctx.$slots, (_, name) => {
        return {
          name,
          fn: _withCtx((slotData) => [
            _renderSlot(_ctx.$slots, name, _normalizeProps(_guardReactiveProps(slotData || {})))
          ])
        };
      })
    ]),
    1024
    /* DYNAMIC_SLOTS */
  );
}

// src/components/BoilerhouseLayout.vue
BoilerhouseLayout_default.render = render;
BoilerhouseLayout_default.__file = "src/components/BoilerhouseLayout.vue";
var BoilerhouseLayout_default2 = BoilerhouseLayout_default;

// src/index.ts
import "./styles/fonts.css";
import "./styles/vars.css";
import "./styles/base.css";
import "./styles/components.css";

// src/markdown.ts
var markdown = {
  theme: "one-dark-pro"
};

// src/index.ts
var theme = {
  extends: DefaultTheme2,
  Layout: BoilerhouseLayout_default2
};
var index_default = theme;
export {
  index_default as default,
  markdown
};
