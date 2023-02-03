### **LOGIFYS**

------------

## Installation

```bash
pip install logifys
```
or

```bash
npm install logifys
```

------------

Usage
```javascript
const log = require('logifys');

log('This is a log message', { font: 'underline', color: 'blue' });

```


------------

What does it do? Logifys makes logging easier and nicer to look at with its extensive selection of fonts and colors.


------------

**Colors:**
- Red,
- Blue,
- Green,
- Yellow,
- Black,
- Cyan,
- Magenta,
- White



------------

**Fonts:**
- Bold,
- Underline,
- Italic.

------------

## Proof of Concept 

```javascript
const log = require('logifys');

var points = new Array(100);
for (var i = 0; i < 100; i++) {
    points[i] = i + 1; 
}

for (var i = 0; i < points.length; i++) {
    log(points[i], { font: 'bold', color: 'magenta' }); 
}
```
It will print:

![Image](/package/Images/Count.png)


