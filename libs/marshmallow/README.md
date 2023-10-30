# Styles

## Migration to 0.1.0

```
// Flex
m-flex-spaced -> m-flex-gap
m-flex-gap( |") -> m-flex-gap:1$1
m-flex:([0-9]+) -> m-flex-grow:$1
m-flex-content-* -> m-flex-content:*
m-flex-justify-* -> m-flex-justify:*
m-flex-items-* -> m-flex-items:*
m-flex-self-* -> m-flex-self:*

// Sizing
m-full-miw -> m-min-width:full
m-full-w -> m-width:full
m-full-maw -> m-max-width:full

m-full-mih -> m-min-height:full
m-full-h -> m-height:full
m-full-mah -> m-max-height:full

// Grid
m-grid-col:([0-9]+) -> m-grid-c:$1
m-grid-row:([0-9]+) -> m-grid-r:$1

// Background
m-bg-(primary|secondary|tertiary|info|success|warning|danger|neutral|background|surface) -> m-bg-color:$1

// Border
m-border:([0-9]+) -> m-border-width:$1
m-border-(primary|secondary|tertiary|info|success|warning|danger|neutral|background|surface) -> m-border-color:$1
m-border-width-([trbl]):([0-9]) -> m-border m-border-width:0 m-border-width-$1:$2

// Text
m-text:([0-9]+) -> m-text-body:$1
m-text-lines:([0-9]+) -> m-text-line:$1
m-text-(primary|secondary|tertiary|info|success|warning|danger|neutral|background|surface) -> m-text-color:$1

// Position
m-position- -> m-position:
m-inset( |") -> m-inset( |"):0$1

// Overflow
m-overflow- -> m-overflow:

// Shades
(primary|secondary|tertiary|info|success|warning|danger|neutral|background|surface): -> $1-
```
