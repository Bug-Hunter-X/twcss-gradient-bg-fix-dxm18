```javascript
<div class="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-lg shadow-md">
  <!-- Some content here -->
</div>
```
This code snippet uses Tailwind CSS to create a div with a gradient background. However, if the `to-purple-500` part is removed or changed to something else, you will get a unexpected background color. This is because Tailwind uses the last color in the gradient as the default background color if the gradient doesn't cover the entire element. 