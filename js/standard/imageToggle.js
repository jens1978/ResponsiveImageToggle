/**
* # -*- coding: utf-8 -*- 
*/


DomReady.ready(function() {
  toggleImagesToButtons();
});

function toggleImagesToButtons()
  {
  if(document.getElementsByClassName)
    {

    for(i=0;i<document.getElementsByClassName('respon').length;i++)
      {
      var parent = document.getElementsByClassName('respon')[i];
      parent.setAttribute('class','respon imgButton');
      var toggleIMG = parent.childNodes[1];
      var toggleIMGsrc = toggleIMG.getAttributeNode('src').nodeValue;

      swapImage(parent,toggleIMG,toggleIMGsrc,i);
      }
    }

  if(!document.getElementsByClassName)
    {
    var imageNode = getElementsByClasses(document,'respon','figure');

    for(i=0;i<imageNode.length;i++)
      {
      var parent = imageNode[i];
      parent.setAttribute('class','respon imgButton');
      var toggleIMG = imageNode[i].childNodes[0];
      var toggleIMGsrc = toggleIMG.getAttributeNode('src').nodeValue;

      swapImage(parent,toggleIMG,toggleIMGsrc,i);
      }
    }
  }

function swapImage(parent,toggleIMG,toggleIMGsrc,i) {
  var sp1 = document.createElement("button");
  var sp1_ID  = "responIMG_" +[i];
  var sp1_content = document.createTextNode("Show Image");

    sp1.setAttribute("id", sp1_ID);
    sp1.setAttribute("class", "noBorder");
    sp1.setAttribute("value", toggleIMGsrc);
    sp1.appendChild(sp1_content);

  parent.replaceChild(sp1, toggleIMG);

  if(document.addEventListener)
    sp1.addEventListener('click', showImage, false);

  if(window.event && !document.addEventListener)
    sp1.attachEvent('onclick', showImage);
}

function showImage(event) {
  if(document.addEventListener)
    var el = event.target;

  if(window.event && !document.addEventListener)
    var el = window.event.srcElement;

  var fInput  = el.getAttribute('id');
  var rpImage = document.getElementById(fInput);
  
  rpImage.setAttribute('style','border:2px pink dashed; font-weight:bold;')
  var parent = document.getElementById(fInput).parentNode;

  var qSrc    = document.getElementById(fInput).getAttributeNode('value').nodeValue;

  var showImage = document.createElement("img");
  var showImage_ID  = fInput;

    showImage.setAttribute("id", fInput);
    showImage.setAttribute("src", qSrc);
    showImage.setAttribute("alt", "");

  parent.replaceChild(showImage, rpImage);
}

function getElementsByClasses(node,searchClass,tag)
  {
  var classElements = new Array();
  if ( node == null )
    node = document;
  if ( tag == null )
    tag = '*';

  var els = node.getElementsByTagName(tag); // use "*" for all elements
  var elsLen = els.length;
  var pattern = new RegExp("\\b"+searchClass+"\\b");

  for (i = 0, j = 0; i < elsLen; i++)
    {
    if ( pattern.test(els[i].className) ) 
      {
      classElements[j] = els[i];
      j++;
      }
    }

  return classElements;
  }
