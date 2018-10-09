var turl= "../45_rt/code/ajax/task_ajax.php?";
function wopen(url,name,w,h)
{
  wleft = (screen.width - w) / 2;
  wtop = (screen.height - h) / 2;

  if (wleft < 0) {  w = screen.width;  wleft = 0; }
  if (wtop < 0)  {  h = screen.height;  wtop = 0; }

  var win = window.open(url,name,'width=' + w + ', height=' + h + ', ' +'left=' + wleft + ', top=' + wtop + ', ' +'location=no, menubar=no, ' + 'status=no, toolbar=no, scrollbars=yes, resizable=yes');

  win.resizeTo(w, h);
  win.moveTo(wleft, wtop);
  win.focus();
}



function winopen()
{
  url = document.getElementById('comment_jump').value;
  w=300;h=300;
  wleft = (screen.width - w) / 2;
  wtop = (screen.height - h) / 2;

  if (wleft < 0) {  w = screen.width;  wleft = 0; }
  if (wtop < 0)  {  h = screen.height;  wtop = 0; }

  var win = window.open(url,name,'width=' + w + ', height=' + h + ', ' +'left=' + wleft + ', top=' + wtop + ', ' +'location=no, menubar=no, ' + 'status=no, toolbar=no, scrollbars=yes, resizable=yes');

  win.resizeTo(w, h);
  win.moveTo(wleft, wtop);
  win.focus();
}


function numberonly(tb)           // onkeypress='return numberonly(this);'
{
var v=tb.value;
var carCode = event.keyCode;
if (((carCode < 48) || (carCode > 57)) && (carCode != 46))
{
event.cancelBubble = true;
alert('Numbers Only..');
event.returnValue = false;
}
else if((carCode == 46) && v.indexOf(".")!= -1 )
{
event.cancelBubble = true;
alert('Numbers Only..');
event.returnValue = false;
}
else if(v.length - v.indexOf(".")==3 && v.indexOf(".") != -1)
{
event.cancelBubble = true;
alert('Numbers Only..');
event.returnValue = false;
}
}

// onmouse over hide / visible any thing

function ShowPop(id) { document.getElementById(id).style.visibility = "visible"; }
function HidePop(id) { document.getElementById(id).style.visibility = "hidden";  }


// onclick text slide dowm over hide / visible any thing

  function sk(a) {$('#tbdown'+a).slideDown('left');}
  function sk2(a) {$('#tbdown'+a).slideUp('left');}


 function opnfullwin(link)   // open window in full screen
  {
   params  = 'width='+screen.width;
   params += ', height='+screen.height;
   params += ', top=0, left=0,status=0,scrollbars=1';
   params += ', fullscreen=yes';
   window.open(link,'popup',params);
  }


function gotolink(href,way)  //way=0 for to open new page //way=1 for to open child window
 {
  if (way==0)   {   window.location=href;    }  else   {    wopen(href,'watch','600','600');   }
 }

function get_calneder(inpt,oupt)  //way=0 for to open new page //way=1 for to open child window
 {
//<![CDATA[
                                                                            Zapatec.Calendar.setup({
                                                                            weekNumbers       : false,
                                                                            electric          : false,
                                                                            inputField        : oupt,
                                                                            button            : inpt,
                                                                            ifFormat          : "%d-%m-%Y",
                                                                            daFormat          : "%d-%m-%Y"
                                                                                               });  //]]>
 }
 

function get_calneder_range(inpt,oupt,yr)  //way=0 for to open new page //way=1 for to open child window
 {
//<![CDATA[
                                                                            Zapatec.Calendar.setup({
                                                                            weekNumbers       : false,
                                                                            electric          : false,
                                                                            inputField        : oupt,
                                                                            button            : inpt,
                                                                            ifFormat          : "%Y-%m-%d",
                                                                            daFormat          : "%Y-%m-%d",
                                                                            range             : [1900.0,yr]
                                                                                               });  //]]>
 }


//function CheckExten(obj)
//   {
//    if (obj.value.substr(-3,3)!='jpg' && obj.value.substr(-3,3)!='JPG' && obj.value!='')
//     {
//      alert('<?php echo $xmlLang->invalid_file;?>');
//      obj.value='';
//     }
//   }
//
