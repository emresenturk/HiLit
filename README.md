# HiLit
A javascript plugin for prettifying and syntax highlighting contents for html code elements.

All you need is opening a `code` element, and writing some code in it.  
If your heart desires is some syntax highlighting, then add `data-syntax` attribute to it like  
`data-syntax="csharp"`, along with the necessary syntax file (see [hilit.syntax.csharp.js](hilit.syntax.csharp.js)).  
After everything loaded & rendered initialize a HiLit object for your code element like this:
```html
<script type="text/javascript">
```
```javascript
var highlighted = new HiLit("#TheCodeElement");
```
```html
</script>
```