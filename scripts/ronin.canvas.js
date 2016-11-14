function Canvas(element)
{
  Module.call(this);
  
  this.element = element;
  
  this.active = function(p)
  {
    if(p[0].indexOf("x") >= 0){
      var rect = new Rect(p[0]);
      this.resize(rect);
      ronin.overlay.resize(rect);
    }
    
    if(p.length > 1 && p[1].indexOf("#") >= 0){
      var color = new Color(p[1]);
      console.log(color);
      
      this.element.getContext('2d').beginPath();
      this.element.getContext('2d').rect(0, 0, canvas.width, canvas.height);
      this.element.getContext('2d').fillStyle = color.hex;
      this.element.getContext('2d').fill();
    }
  }
  
  this.passive = function(p)
  {
    console.log("TODO: Show guide");
  }
  
  //
  
  this.resize = function(rect)
  {
    this.element.setAttribute('width',rect.width+"px");
    this.element.setAttribute('height',rect.height+"px");
  }
}